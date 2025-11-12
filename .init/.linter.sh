#!/bin/bash
cd /home/kavia/workspace/code-generation/interactive-learning-platform-222543-222565/lms_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

