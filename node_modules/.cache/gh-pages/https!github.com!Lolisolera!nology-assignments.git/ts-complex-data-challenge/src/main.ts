import { companies } from "./data";

const button = document.getElementById("render-companies") as HTMLButtonElement;
const container = document.getElementById("companies-container") as HTMLDivElement;
//container where the company cards will be dinamically added.


// Function to render companies into the container
const renderCompanies = (): void => { //this is my function
    container.innerHTML = ""; // Clear the container before adding new cards
    //to avoid duplicating cards when the function is called multiple times.

    companies.forEach((company) => { //inline styling of each card.
        const companyCard = document.createElement("div");
        companyCard.style.border = "1px solid #ccc";
        companyCard.style.padding = "10px";
        companyCard.style.margin = "10px 0";
        companyCard.style.borderRadius = "5px";
        companyCard.style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.1)";

        const name = document.createElement("h2");  //DOM node Creates an empty <h2> element.
        //createElement(method) creates the h2 dinamically - on the fly.
        name.textContent = company.name; //Adds text content to the <h2> element.

        const industry = document.createElement("p");//Creates an empty <p> element.
        industry.textContent = `Industry: ${company.industry}`;//Adds text content to the <p> element. If company.industry is "Finance", it becomes <p>Industry: Finance</p>.

        const start = document.createElement("p");//They create <p> elements and populate them with text like Start Year: 1981 or End Year: 2004.
        start.textContent = `Start Year: ${company.start}`;

        const end = document.createElement("p");
        end.textContent = `End Year: ${company.end ? company.end : "Present"}`;

        // Append all details to the card
        companyCard.appendChild(name);//nest an element inside the parent element
        companyCard.appendChild(industry);
        companyCard.appendChild(start);
        companyCard.appendChild(end);

        // Append the card to the container
        container.appendChild(companyCard);
    });
};

// Add an event listener to the button
button.addEventListener("click", renderCompanies);


//EXPLAINED:
//The name, industry, start, and end variables are DOM elements, not plain objects. They represent HTML elements (<h2> or <p>) that 
//we create dynamically and later append to the DOM using JavaScript.

//The GOAL of this challenge is to dynamically display content on a webpage.
//The browser renders HTML elements, and these elements are part of the DOM.
//The data is stored in objects (e.g., the companies array).
//JavaScript uses the data to create corresponding DOM nodes (e.g., <h2>, <p>).
//The DOM nodes are added to the DOM, making them visible in the browser.
//If we only use objects, we would have no way to display the data in the browser. 
//Objects can hold the information but cannot render themselves on the page.
//Object represents the data, but to make it appear on the webpage, you’d still need to convert it into DOM elements.