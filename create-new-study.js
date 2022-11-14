import fs from 'fs';

const replaceInFile = (file, predicate_str, replace_str) => {
    const content = fs.readFileSync(file, 'utf8');
    const replacedContent = content.replace(predicate_str, replace_str)
    fs.writeFileSync(file, replacedContent, "utf-8")
}

const args = process.argv.slice(2)
if (args.length === 0) {
    console.log("Please provide a case study name.")
    process.exit(1)
}

const studyName = args[0].replace(/[^a-z0-9]/gi, '_').toLowerCase();
const imageFolder = `./public/img/studies/${studyName}`
const imageFile = `./public/img/studies/${studyName}/cover.webp`
const studyFile = `./src/pages/case-studies/${studyName}.md`

if (fs.existsSync(imageFolder)){
    console.log("You already have a case study with that name. Please use another name.");
    process.exit(1)
}

fs.mkdirSync(imageFolder);
fs.copyFileSync("./cover-template.webp", imageFile)
fs.copyFileSync("./case-study-template.md", studyFile)
replaceInFile(studyFile, "STUDY_NAME", studyName)
replaceInFile(studyFile, "THUMBNAIL_URL", imageFile.substring(8))

console.log("Successfully created a new case study.")