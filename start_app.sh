#!/bin/bash
cd /home/pi/Dashboard/dist/dashboard/browser
angular-http-server -p 9000
chromium-browser --start-fullscreen localhost:9000