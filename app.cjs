const express = require("express");
const jwt = require("jsonwebtoken");
const { Village, Activity, Admin, GC, Project, Technology, Challenge, Collaborator, ProjectComponent, Interest } = require("./mongo.cjs");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Add this line to import the 'cookie-parser' middleware
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Admin.findOne({ email: email, password: password });

    if (check) {
      const payload = { email };
      const adminToken = jwt.sign(payload, 'your-secret-key');
      res.cookie('adminToken', adminToken, { httpOnly: true });
      res.redirect('/home');
    } else {
      res.json({ status: "notexist" });
    }
  } catch (e) {
    res.json({ status: "fail" });
  }
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get("/home", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'home.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get("/gc", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'gc.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get("/rp", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'rp.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get("/up", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'up.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get("/vp", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'vp.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get("/tech", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'tech.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});

app.get("/collab", async (req, res) => {
  const adminToken = req.cookies.adminToken;

  if (!adminToken) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(adminToken, 'your-secret-key');
    res.sendFile(path.join(__dirname, 'collab.html'));
  } catch (err) {
    return res.redirect('/login');
  }
});


app.post("/gc", async (req, res) => {

  try {
    const { title, imageUrl, sector, keywords, cc, cd, impact, village, reference } = req.body;

    // Create a new GC document
    const newGC = new GC({
      title,
      imageUrl,
      sector,
      keywords,
      cc,
      cd,
      impact,
      village,
      reference,
    });
    await newGC.save();
    res.redirect("/gc");
  } catch (err) {
    return res.redirect('/login');
  }
});

app.post("/tech", async (req, res) => {
  try {
    const {
      provider,
      image,
      location,
      affiliated,
      solutionType,
      sector,
      website,
      projectLifeCycle,
      generalDetails,
      impact,
      resources,
      webArticles,
      webArticlesURL
    } = req.body;

    // Create a new Tech document
    const newTech = new Technology({
      provider,
      image,
      location,
      affiliated,
      solutionType,
      sector,
      website,
      projectLifeCycle,
      generalDetails,
      impact,
      resources,
      webArticles,
      webArticlesURL
    });

    await newTech.save();
    res.redirect("/tech");
  } catch (err) {
    console.error(err);
    return res.redirect('/login');
  }
});

app.post("/up", async (req, res) => {
  
})

app.post("/vp", async (req, res) => {
  
})

app.post("/rp", async (req, res) => {
  
})

app.post("/collab", async (req, res) => {
  try {
    const {
      name,
      image,
      organization,
      persona,
      website,
      location,
      sectors,
      businessProfile,
      collaborator,
      technology,
    } = req.body;

    // Create a new Tech document
    const newCollab = new Collaborator({
      image,
      name,
      organization,
      persona,
      website,
      location,
      sectors,
      businessProfile,
      collaborator,
      technology,
    });

    await newCollab.save();
    res.redirect("/collab");
  } catch (err) {
    console.error(err);
    return res.redirect('/login');
  }
});






app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
