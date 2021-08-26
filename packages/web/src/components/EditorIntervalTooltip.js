import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { popupFMV } from '../types/animConfigs';

const EditorIntervalTooltip = () => {

  const isShown = useSelector(
    state => state.display.isEditorIntervalTooltipShown
  );
  const anchorPosition = useSelector(
    state => state.display.editorIntervalTooltipPosition
  );

  if (!isShown) return <AnimatePresence key="AP_EditorIntervalTooltip" />;

  const width = 224, height = 96;
  let top = anchorPosition.top - height - 8;
  if (top < 9) top = anchorPosition.top + anchorPosition.height + 8;
  const left = anchorPosition.left - (width / 2);
  const popupStyle = { width, top, left };

  return (
    <AnimatePresence key="AP_EditorIntervalTooltip">
      <motion.div style={popupStyle} className="fixed rounded-md shadow-lg bg-indigo-500 px-4 py-3 overflow-hidden origin-bottom" variants={popupFMV} initial="hidden" animate="visible" exit="hidden">
        <span className="text-sm text-white">How many seconds between previous reminder ends and this reminder starts.</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(EditorIntervalTooltip);
