function generateNote() {
    const notes = [
        "You are the best thing in my life.",
        "Every day with you is a blessing.",
        "I love you more than words can say.",
        "You make my world brighter.",
        "Forever and always, my love."
    ];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    document.getElementById("note").innerText = randomNote;
}
