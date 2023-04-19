const numBOXES = 5;
console.log("Hello World");
let curr_date = new Date();
const curr_datetime_string = curr_date.toISOString().slice(0, -8);
console.log(curr_datetime_string);
const calendar = document.getElementById("calendar");
for(let i = 1; i <= numBOXES; i++) {
    let div = document.createElement("div");
    div.classList = "calendar_entry";
    calendar.appendChild(div);

    // Create Date
    let date = document.createElement("time");
    date.classList = "date";
    date.innerText = "sometext";
    div.appendChild(date);

    let date_selector = createHiddenInput(date, "date", curr_datetime_string);
    date_selector.addEventListener("change", (e) => {
        date.innerText = e.target.value;
    });
    div.appendChild(date_selector);

    let event_list = document.createElement("div");
    event_list.classList = "eventList";
    div.append(event_list);

    createEventEntry(event_list);
    createEventEntry(event_list);
    createEventEntry(event_list);
    createEventEntry(event_list);

}

function createEventEntry(event_list) {
    let eventEntry = document.createElement("div");
    eventEntry.classList = "eventEntry";
    event_list.append(eventEntry);

    // Create Time
    let time = document.createElement("time");
    time.classList = "time";
    let options = {
    }
    let timeformat = new Intl.DateTimeFormat(locale=undefined,
                                             options={
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
    // time.setAttribute("datetime", timeformat.format(curr_date));
    time.setAttribute("datetime", "19:15");
    eventEntry.appendChild(time);

    let time_selector = createHiddenInput(time, "time", curr_datetime_string);
    time_selector.addEventListener("change", (e) => {
        time.innerText = timeformat.format(new Date(`December 17, 1995 ${e.target.value}:00`));
    });

    // Create Description
    let desc = document.createElement("input");
    desc.classList ="Eventdescription";
    desc.type = "text";
    desc.value = "foo";
    eventEntry.appendChild(desc);

    eventEntry.appendChild(time_selector);
}

function createHiddenInput(clickerElement, type, value) {
    let elem = document.createElement("input");
    elem.hidden = false;
    elem.type =type;
    elem.datetime = curr_date;
    elem.value= value;
    clickerElement.addEventListener("click", (e) => {
        elem.showPicker();
    });
    return elem;
}
