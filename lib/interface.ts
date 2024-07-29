export interface QuestionCardProps {
    question: string;
    variant: "checkbox" | "short-answer" | undefined;
    required?: boolean;
}