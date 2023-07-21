var express = require('express');
var router = express.Router();
var path = require('path');

const glossarylist =[
  {'ID': 1, 'Term':'AIOps (artificial intelligence for IT operations)', 'Description':'This is a method that uses machine learning and AI to improve and automate various parts of IT operations and management. It usually deals with big data.', 'References':'[1] J. Mulder, “Enterprise devops for architects / Mulder, Jeroen.,” Enterprise DevOps for Architects / Mulder, Jeroen. | EBSCOhost, https://openurl.ebsco.com/c/np77rt/EPDB%3Acat00097a%3A14%3A1312062/detailv2?sid=ebsco%3Aplink&amp;id=ebsco%3Acat00097a%3Adeakin.b4727315&amp;x-cgp-token=np77rt (accessed Jul. 21, 2023). '},
  {'ID': 2, 'Term':'Bootstrap', 'Description':'Bootstrap is a framework which is used by the developers in the process of creation of front-ends of websites and applications.This makes responsive web design a reality.', 'References':'[1] A. Ouellette et al., “What is bootstrap? an awesome 2023 beginner’s guide,” CareerFoundry, https://careerfoundry.com/en/blog/web-development/what-is-bootstrap-a-beginners-guide/ (accessed Jul. 21, 2023). '},
  {'ID': 3, 'Term':'express-generator', 'Description':'This is use to quickly create a application skeleton using express library', 'References':'[1] ujju20 and amitsingh2730, “What is express generator ?,” GeeksforGeeks, https://www.geeksforgeeks.org/what-is-express-generator/ (accessed Jul. 21, 2023). '},
  {'ID': 4, 'Term':'Datacentre', 'Description':'A place that offers shared access to programs and data through the use of a network, computing, and storage infrastructure.', 'References':'[1] F. Habte, “What is a data center? the different types of data centers,” Check Point Software, https://www.checkpoint.com/cyber-hub/cyber-security/what-is-data-center/#:~:text=A%20data%20center%20is%20a,%2C%20compute%2C%20and%20storage%20infrastructure. (accessed Jul. 21, 2023). '},
  {'ID': 5, 'Term':'Repository', 'Description':'Its a place where all the codings of the projects can be stored.It is used as a platform to discus and manage the projects.', 'References':'[1] “About repositories,” GitHub Docs, https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (accessed Jul. 21, 2023). '},
  {'ID': 6, 'Term':'DevOps', 'Description':'Software development (dev) and operations (ops) are combined to form DevOps. By fostering a culture of collaboration and shared accountability, it is described as a software engineering process that strives to combine the work of development teams with operations teams.', 'References':'[1] E. Freeman, “DevOps,” Amazon, https://aws.amazon.com/devops/what-is-devops/#:~:text=DevOps%20is%20the%20combination%20of,development%20and%20infrastructure%20management%20processes. (accessed Jul. 21, 2023). '},
  {'ID': 7, 'Term':'Render', 'Description':'The modern cloud provider for all your apps and websites. It is used by the developers to run their apps and website.', 'References':'[1] “Cloud application hosting for developers,” Render, https://render.com/#:~:text=Render%20is%20a%20unified%20cloud,and%20auto%20deploys%20from%20Git. (accessed Jul. 21, 2023). '},
  {'ID': 8, 'Term':'Microservices ', 'Description':'Microservices is an architectural design for building a distributed application using containers.', 'References':'[1] M. Larsson, “Microservices,” Amazon, https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and,small%2C%20self-contained%20teams. (accessed Jul. 21, 2023). '},
  {'ID': 9, 'Term':'Ansible', 'Description':'Its an open source software which enables infrastructure as codes. It provides powerful automations.', 'References':'[1] Opensource.com, “What is Ansible?,” Opensource.com, https://opensource.com/resources/what-ansible (accessed Jul. 21, 2023). '},
  {'ID': 10, 'Term':'Maven ', 'Description':'Maven is a build automation that is mainly used for java projects.It is an open source build tool', 'References':'[1] I. Gaba, “What is Maven: Here’s what you need to know [updated],” Simplilearn.com, https://www.simplilearn.com/tutorials/maven-tutorial/what-is-maven (accessed Jul. 21, 2023). '},

]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT22 DevOps Glossary', sub:'to my website showing a collecrtion of DevOps terms and their brief descriptions.',names: glossarylist });
});

module.exports = router;
