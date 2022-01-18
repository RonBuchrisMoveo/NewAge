export interface IUserActivity{
    "ID": string,
    "Activity Type": string,
    "Name": string,
    "Short Description": string,
    "Long Description": string,
    "image": string,
    "Web Site": string,
    "Meeting Schedulle": {
    "Times": number,
    "Reccurence":string
    },
    
    "Fit": {
    "percentage": number,
    "Fit Explanation": string,
    "Distance From Home": string
    },
    
    "Money": {
    "Cost": {
    "Billing sum": number,
    "Billing Reccurence": string
    }
    },
    
    "Address": {
    "Street":string,
    "City":string,
    "Location Description":string
    },
    
    "Contact": {
    "Phone": string,
    "Name":string
    },
    
    "Language": {
    "Main Language": string,
    "Additional Languages": boolean
    }
    }