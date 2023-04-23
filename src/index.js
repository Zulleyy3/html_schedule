"use strict"
const numBOXES = 5;
console.log("Hello World");
let curr_date = new Date();
const curr_datetime_string = curr_date.toISOString().slice(0, -8);
let timeformat = new Intl.DateTimeFormat(undefined,
    {
       hour: "2-digit",
       minute: "2-digit",
   });
console.log(curr_datetime_string);
const calendar = document.getElementById("calendar");
const calendar_entry_tmpl = document.getElementById("calendar_entry_tmpl");
const event_entry_tmpl = document.getElementById("event_entry_tmpl")

for(let i = 1; i <= numBOXES; i++) {
    const calendar_entry = calendar_entry_tmpl.content.cloneNode(true);
    const event_list = calendar_entry.querySelector(".event_list");
    for (let j = 0; j < 2; j++) {
        const event_list_entry = event_entry_tmpl.content.cloneNode(true);
        // dynamically load time element;
        const time_elem = event_list_entry.querySelector("time");
        time_elem.setAttribute("datetime", timeformat.format(curr_date));
        time_elem.innerText = timeformat.format(curr_date);
        event_list.appendChild(event_list_entry);
        // TODO: DO EVENTS PROPERLY
    }
    calendar.appendChild(calendar_entry);
}