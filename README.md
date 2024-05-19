# 💡Inspiration
Our inspiration for Database Doggy came from a desire to teach our friends in other teams about the importance and functionality of databases. We noticed that many of our peers struggled with grasping database concepts and wanted to find a fun and engaging way to make learning these concepts easier.

When we saw the Neurelo sponsor prize, we realized our idea perfectly aligned with their mission to foster innovative learning tools. We decided to create a game that not only simplifies database concepts but also engages users through interactive play. By incorporating quizzes at the end of each game session, we ensure that learners can test their knowledge and reinforce what they've learned in a fun and effective manner.

# 🔎 What it Does
"Database Doggy" is an interactive educational project designed to teach people about databases through a fun and engaging game format. The project offers three tracks for users to choose from: MongoDB, SQL, and Vector. Each track consists of multiple levels, and at the beginning of each level, users are presented with an information page that includes a knowledge check to reinforce key concepts.After completing the information page, users take a quiz that covers everything they've learned in that level. The quiz includes a combination of multiple-choice questions and challenges where users must write their own code. To add a sense of challenge, users have three lives, and if they fail or run out of lives, they must restart from the beginning. This approach encourages users to pay close attention and reinforces their learning through repetition.


# 🔨 How We Built It
To build our project, we used React and Next.js for the frontend along with tailwindCSS for stylizing. We also designed our own graphics in-house.

For the backend and database, we utilized Neurelo for a variety of functions, including validating and generating datasets for our schemas, as well as generating full APIs based on the schema. Neurelo's capabilities were integral to our project, as they helped streamline the development process and ensure the integrity of our data.

We also chose MongoDB as our database of choice for storing dynamic content. MongoDB is a popular NoSQL database that offers flexibility and scalability, making it well-suited for our project's needs.

# 🚧 Challenges We Ran Into
During our project, one of the major challenges we faced was the initial struggle to come up with a viable, unique, and winning idea. We spent a significant amount of time brainstorming and exploring the various prizes, most notably the loyalty program one by Metis and the DEI track, but we found it challenging to settle on something that we were all passionate about.

After we finally came up with an idea after 12 hours, we realized after 20 hours in that our idea wasn't feasible and we didn't have the right experience to code it. We made the difficult decision to scrap our idea and start from scratch. While this was a setback, it ultimately allowed us to refocus our efforts and come up with a stronger concept that we were all excited about!

One of the major challenges we faced was integrating Neurelo with MongoDB. We ran into issues with IP configuration and meeting the specific requirements of Neurelo, such as the need to specify the database in the URL string. This required us to carefully review our configuration and make adjustments to ensure compatibility.

Additionally, we encountered extensive problems while working with smart contracts. These challenges were significant enough to force us to pivot our project idea. However, this setback also presented us with an opportunity to explore new possibilities and refine our approach.

# 🎖️ Accomplishments That We're Proud Of
Despite our challenges, we are particularly proud of the UI we've developed. We believe it has a professional, coherent, and fun look that enhances the overall user experience. This achievement reflects our commitment to creating a high-quality product, even in the face of adversity.

# 📕 What We Learned
Through this project, we gained valuable insights into different types of blockchains and their applications. At the sponsor booths, we learned about the diverse uses of blockchain technology, such as its role in enhancing security, transparency, and efficiency in various industries. These insights deepened our understanding of blockchain's potential and inspired us to integrate a blockchain loyalty program into our project.

Additionally, we acquired hands-on experience with MongoDB, a NoSQL database. Learning to use MongoDB was a significant learning curve, but it proved to be a powerful tool for managing dynamic content in our project. This experience not only enhanced our technical skills but also broadened our understanding of database management and its importance in modern web development.

# 🪜What's Next?
In the future, we would love to implement:

More levels with advanced database concepts: Dive deeper into advanced database topics such as indexing, normalization, and transaction management, and database administration. 
Implement more tracks with different database management systems (DBMS): Explore different types of database management systems such as MySQL, PostgreSQL, and MongoDB. 
Practical Projects: Apply your database knowledge to real-world projects. Build a simple database-backed application or contribute to open-source projects that use databases.

## Running Locally
1. fill out .env with the creds 
2. `npm i && npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
