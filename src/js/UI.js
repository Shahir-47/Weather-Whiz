import icon from "../img/icon.svg";
import search from "../img/search.svg";
import GitHub from "../img/git.svg";

function displayNavBar() {
	const navBar = document.createElement("div");
	navBar.classList.add("nav-bar");

	// Create the logo
	const logoBox = document.createElement("div");
	logoBox.classList.add("logo-box");
	const logo = document.createElement("img");
	logo.src = icon;
	logo.alt = "logo";
	const logoText = document.createElement("h1");
	logoText.textContent = "Weather Whiz";
	logoBox.appendChild(logo);
	logoBox.appendChild(logoText);
	navBar.appendChild(logoBox);

	// search bar
	const searchBox = document.createElement("div");
	searchBox.classList.add("search-box");
	const searchInput = document.createElement("input");
	searchInput.classList.add("search-input");
	searchInput.type = "text";
	searchInput.placeholder = "Search";
	searchInput.id = "search";
	searchInput.name = "search";
	searchBox.appendChild(searchInput);
	const searchButton = document.createElement("button");
	searchButton.classList.add("search-button");
	searchBox.appendChild(searchButton);
	const searchIcon = document.createElement("img");
	searchIcon.src = search;
	searchIcon.alt = "Search icon";
	searchButton.appendChild(searchIcon);
	navBar.appendChild(searchBox);

	// toggle switch for imperial/metric units
	const toggleBox = document.createElement("div");
	toggleBox.classList.add("toggle-switch");
	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.setAttribute("id", "unit-toggle");
	const label = document.createElement("label");
	label.setAttribute("for", "unit-toggle");
	const metric = document.createElement("span");
	metric.classList.add("toggle-icon");
	metric.classList.add("toggle-icon-metric");
	const imperial = document.createElement("span");
	imperial.classList.add("toggle-icon");
	imperial.classList.add("toggle-icon-imperial");
	const slider = document.createElement("span");
	slider.classList.add("slider");
	label.appendChild(imperial);
	label.appendChild(metric);
	label.appendChild(slider);
	toggleBox.appendChild(checkBox);
	toggleBox.appendChild(label);
	navBar.appendChild(toggleBox);

	return navBar;
}

function makePageContainer() {
	const pageContainer = document.createElement("div");
	pageContainer.classList.add("page-container");
	return pageContainer;
}

function displayFooter() {
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	// Link to my github profile
	const gitHubProfile = document.createElement("a");
	gitHubProfile.href = "https://github.com/Shahir-47";

	// GitHub logo
	const gitHubProfileImg = document.createElement("img");
	gitHubProfileImg.src = GitHub;
	gitHubProfileImg.alt = "gitHub Logo";

	// my Github username
	const gitHubProfileText = document.createElement("p");
	const atSymbol = document.createElement("span");
	atSymbol.classList.add("at-symbol");
	atSymbol.textContent = "@";
	const username = document.createElement("span");
	username.textContent = "Shahir-47";
	gitHubProfileText.appendChild(atSymbol);
	gitHubProfileText.appendChild(username);

	gitHubProfile.appendChild(gitHubProfileImg);
	gitHubProfile.appendChild(gitHubProfileText);

	const separator = document.createElement("p");
	separator.textContent = "|";

	// Link to this source code
	const gitHubRepo = document.createElement("a");
	gitHubRepo.href = "https://github.com/Shahir-47/Weather-Whiz";
	gitHubRepo.textContent = "Source Code";

	footer.appendChild(gitHubProfile);
	footer.appendChild(separator);
	footer.appendChild(gitHubRepo);

	return footer;
}

function pageLoad() {
	const content = document.getElementById("content");
	content.appendChild(displayNavBar());
	content.appendChild(makePageContainer());
	content.appendChild(displayFooter());
}

export default pageLoad;
