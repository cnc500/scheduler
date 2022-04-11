# Scheduler


## Description

Scheduler is a daily calendar that has text areas for each of the typical 9 working hours -- from 9 am through 5 pm.  It displays the current time and allows users to fill in the text areas and save their inputs.  These inputs are saved in local storage if the user decides to save them so that they will still be there when program is again loaded.  Finally, the background of each text area by hour is shaded gray for the past, red for the present, and green for the future.  

## Accomplishment 

This Scheduler is completely implemented and displays a friendly current time to the second. This was done using moment.js being refreshed every second through using setInterval.  In addition,
the moment a new hour starts, the background colors of the text areas will update. 

## Deployed Image

[screenshot](screenshot5.png)

## URL

https://cnc500.github.io/scheduler/

## Reference

Abdullah Al Hilfi helped point me in the right direction setting up parents of the text areas with id's matching the hours that they represented. 