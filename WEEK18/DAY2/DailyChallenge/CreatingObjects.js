class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

const video1 = new Video("JavaScript Basics", "Alice", 300);
video1.watch();  
// Alice watched all 300 seconds of "JavaScript Basics"!

const video2 = new Video("CSS Animations", "Bob", 450);
video2.watch();  
// Bob watched all 450 seconds of "CSS Animations"!

const videosData = [
  { title: "React Crash Course", uploader: "Charlie", time: 1200 },
  { title: "Node.js Tutorial", uploader: "Diana", time: 900 },
  { title: "Python OOP", uploader: "Eve", time: 600 },
  { title: "SQL Basics", uploader: "Frank", time: 750 },
  { title: "Docker for Beginners", uploader: "Grace", time: 1100 }
];

const videoInstances = videosData.map(data => new Video(data.title, data.uploader, data.time));

videoInstances.forEach(video => video.watch());