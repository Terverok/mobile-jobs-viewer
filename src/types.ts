export type JobDTO = {
    companyName: string,
    role: string,
    expirationDate: string,
    price: number,
    localisation: string,
};

export enum JobType {
    Active,
    Upcoming,
    Completed
}
