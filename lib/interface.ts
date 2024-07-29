export interface QuestionCardProps {
    question: any;
    variant: "checkbox" | "short-answer" | undefined;
    required?: boolean;
    data?: any;
}