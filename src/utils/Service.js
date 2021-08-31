let projectData = {
    "pname": "Blog With Functional Components",
    "header": [{
        "pageName": "Home",
        "pageLink": "/"
    },
    {
        "pageName": "Contact US",
        "pageLink": "/contactus"
    },
    {
        "pageName": "Post",
        "pageLink": "/post"
    },
    {
        "pageName": "About",
        "pageLink": "/about"
    }],
    
    "footer": [{
        "pageName": "Home",
        "pageLink": "/"
    },
    {
        "pageName": "Contact US",
        "pageLink": "/contactus"
    },
    {
        "pageName": "Post",
        "pageLink": "/post"
    },
    {
        "pageName": "About",
        "pageLink": "/about"
    }],

    "homeCarousal": [{
        "imageName": "First Slide",
        "imageLink": "https://res.cloudinary.com/tpostr/image/upload/v1553865338/paparouna/IMG_7638-01.jpg",
        "imageContent": "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        "imageName": "Second Slide",
        "imageLink": "https://res.cloudinary.com/tpostr/image/upload/v1553865338/paparouna/IMG_7621-01.jpg",
        "imageContent": "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        "imageName": "Third Slide",
        "imageLink": "https://res.cloudinary.com/tpostr/image/upload/v1553865337/paparouna/IMG_7615-01.jpg",
        "imageContent": "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }],
    "copyrightContent": "Copyright Content",
    } 

export default class Service{
	static getAppTitle() {
        return projectData.pname; 
	}
	static getNavigation(navType) {
        return projectData[navType]
	}
	static getCarousalData(carousalType) {
        return projectData[carousalType]
	}
	static getCopyrightData() {
        return projectData["copyrightContent"]
	}

}