export interface Question {
    id: number;
    question: string;
    options: string[];
    reponse: string;
    answered?: boolean;
    selectedOption?: string;
}