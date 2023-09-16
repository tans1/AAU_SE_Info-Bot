const {
  FirstYearFistsemesterHandler,
  FirstYearSecondsemesterHandler,
  FirstYearFistsemester_ResourceHandler
} = require("../components/first year/first semester/firstYearfirstSemester.handler");

const {
  GeographyResource
} = require("../components/first year/first semester/resources/geography");
const {
  PsychologyResource
} = require("../components/first year/first semester/resources/psychology");
const {
  EnglishResource
} = require("../components/first year/first semester/resources/english");
const {
  MathematicsResource
} = require("../components/first year/first semester/resources/mathematics");
const {
  PhysicalFitnessResource
} = require("../components/first year/first semester/resources/physicalFitness");
const {
  PhysicsResource
} = require("../components/first year/first semester/resources/physics");
const {
  LogicResource
} = require("../components/first year/first semester/resources/logic");

const CallBackQueryHandler = (ctx) => {
  const query = ctx.update.callback_query.data;
  switch (query) {
    case "first_year_first_semester":
      FirstYearFistsemesterHandler(ctx);
      break;
    case "first_year_second_semester":
      FirstYearSecondsemesterHandler(ctx);
      break;
    case "first_year_first_semester_resources":
      FirstYearFistsemester_ResourceHandler(ctx);
      break;
    case "Geography":
      console.log("the geography is called");
      GeographyResource(ctx);
      console.log("the geography IS DONE");

      break;
    case "Psychology":
      PsychologyResource(ctx);
      break;
    case "PhysicalFitness":
      PhysicalFitnessResource(ctx);
      break;
    case "Physics":
      PhysicsResource(ctx);
      break;
    case "Logic":
      LogicResource(ctx);
      break;
    case "English":
      EnglishResource(ctx);
      break;
    case "Mathematics":
      MathematicsResource(ctx);
      break;
    default:
      break;
  }
};

module.exports = { CallBackQueryHandler };
