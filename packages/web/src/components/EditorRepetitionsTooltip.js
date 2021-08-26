import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { popupFMV } from '../types/animConfigs';

const EditorRepetitionsTooltip = () => {

  const isShown = useSelector(
    state => state.display.isEditorRepetitionsTooltipShown
  );
  const anchorPosition = useSelector(
    state => state.display.editorRepetitionsTooltipPosition
  );

  if (!isShown) return <AnimatePresence key="AP_EditorRepetitionsTooltip" />;

  const width = 236, height = 72;
  let top = anchorPosition.top - height - 8;
  if (top < 9) top = anchorPosition.top + anchorPosition.height + 8;
  const left = anchorPosition.left - (width / 2);
  const popupStyle = { width, top, left };

  return (
    <AnimatePresence key="AP_EditorRepetitionsTooltip">
      <motion.div style={popupStyle} className="fixed rounded-md shadow-lg bg-indigo-500 px-4 py-3 overflow-hidden origin-bottom" variants={popupFMV} initial="hidden" animate="visible" exit="hidden">
        <span className="text-sm text-white">How many times to play sound when this reminder reminds</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(EditorRepetitionsTooltip);
