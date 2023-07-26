/*
## Example 4 - Notes

Write a `Notes` class that manages the collection of notes in the `items` property.
A note is an object with `text` and `priority` properties. Add a static
property `Priority` to the class, which will store the object with priorities.


Add methods`addNote(note)`, `removeNote(text)` and
`updatePriority(text, newPriority)`.
*/

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  constructor(notes) {
    this.items = notes;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = this.items.findIndex((el) => el.text === text);

    if (index === -1) {
      console.log("Nu exista nota cu acest text");

      return;
    }

    this.items.splice(index, 1);
  }

  updatePriority(text, newPriority) {
    const index = this.items.findIndex((el) => el.text === text);

    if (index === -1) {
      console.log("Nu exista nota cu acest text");

      return;
    }

    this.items[index].priority = newPriority;
  }
}

const myNotes = new Notes([]);

console.log(JSON.stringify(myNotes.items));
myNotes.addNote({
  text: "My first note",
  priority: Notes.Priority.NORMAL,
});

myNotes.addNote({
  text: "My second note",
  priority: Notes.Priority.NORMAL,
});
console.log(JSON.stringify(myNotes.items));

myNotes.removeNote("My second note");

myNotes.updatePriority("My first note", Notes.Priority.LOW);
console.log(JSON.stringify(myNotes.items));
