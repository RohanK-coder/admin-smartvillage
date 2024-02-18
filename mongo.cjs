const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://Srinaini:srinaini2021@cluster0.wxkfolf.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
});


const adminLoginSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const GCSchema=new mongoose.Schema({
    title:{
        type:String
    },
    imageUrl:{
        type:String
    },
    sector:{
        type:String
    },
    keywords:{
        type:String
    },
    followedBy:{
        type:String
    },
    cc:{
        type:String
    },
    cd:{
        type:String
    },
    impact:{
        type:String
    },
    village:{
        type:String
    },
    reference:{
        type:String
    },express:{
        type:String
    },
})

const ProjectSchema=new mongoose.Schema({
    name:{
        type:String
    },
    folder:{
        type:String
    },
    imageUrl:{
        type:String
    },
    type:{
        type:String
    },
    createdAt:{
        type:String
    },
})

const ProjectComponentSchema=new mongoose.Schema({
    folder:{
        type:String
    },
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    category:{
        type:String
    },
    sector:{
        type:String
    },
    projectType:{
        type:String
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    status:{
        type:String
    },
    content:{
        type:String
    }

})

const TechnologySchema=new mongoose.Schema({
    provider:{
        type:String
    },
    image:{
        type:String
    },
    location:{
        type:String
    },
    affiliated:{
        type:String
    },
    solutionType:{
        type:String
    },
    sector:{
        type:String
    },
    website:{
        type:String
    },
    projectLifeCycle:{
        type:String
    },
    generalDetails:{
        type:String
    },
    impact:{
        type:String
    },
    resources:{
        type:String
    },
    webArticles:{
        type:String
    },
    webArticlesURL:{
        type:String
    },
})

const ChallengeSchema=new mongoose.Schema({
    email:{
        type:String
    },
    sector:{
        type:String
    },
    title:{
        type:String
    },
    summary:{
        type:String
    },
    details:{
        type:String
    },
    impact:{
        type:String
    },
    image:{
        type:String
    }
})

const CollaborateSchema=new mongoose.Schema({
    image:String,
    name:String,
    organization:String,
    persona:String,
    website:String,
    location:String,
    sectors:String,
    businessProfile:String,
    collaborator:String,
    technology:String
})

const villageSchema=new mongoose.Schema({
    name:String,
    image:String,
    location:String,
    companies:String,
    status:String,
    team:String,
    about:String,
    folder:String,
})

const activitySchema=new mongoose.Schema({
    name:String,
    date:String,
    folder:String
})

const interestSchema= new mongoose.Schema({
    title:String,
    url:String,
    description:String,
})

const Interest = new mongoose.model("Interest", interestSchema)
const Village =mongoose.model("Village", villageSchema)
const Activity = mongoose.model("Activity", activitySchema)
const Collaborator=mongoose.model("Collaborator", CollaborateSchema)
const Admin= mongoose.model("Admin",adminLoginSchema)
const GC = mongoose.model("GC", GCSchema)
const Project = mongoose.model("Project", ProjectSchema)
const Technology = mongoose.model("Technology", TechnologySchema)
const Challenge = mongoose.model("Challenge", ChallengeSchema)
const ProjectComponent = mongoose.model("ProjectComponent", ProjectComponentSchema)

module.exports = {
    Village:Village,
    Activity:Activity,
    Admin: Admin,
    GC: GC,
    Project: Project,
    Technology: Technology,
    Challenge: Challenge,
    Collaborator: Collaborator,
    ProjectComponent: ProjectComponent,
    Interest: Interest,
};
