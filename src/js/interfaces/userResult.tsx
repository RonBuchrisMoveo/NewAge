export interface IUserResult{
    UserId: number,
    UserName: string,
    Results: [
      {
        Matchs: [
          {
            Option1: {
              Id :  number,
              Name:string,
              Description:string,
              image: string,
              percentage: number
            },
            Option2: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            },
            Option3: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            }
          }
        ],
        Intrest: [
          {
            Option1: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            },
            Option2: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            },
            Option3: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            }
          }
        ],
        Maby: [
          {
            Option1: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            },
            Option2: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            },
            Option3: {
                Id :  number,
                Name:string,
                Description:string,
                image: string,
                percentage: number
            }
          }
        ]
      }
    ]
  }