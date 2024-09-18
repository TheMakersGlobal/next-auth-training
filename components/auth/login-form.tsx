import { CardWrapper } from "./card-wrapper"

export const LoginForm = () => {
    return(
        <CardWrapper
        headerLabel="Welcome Back!"
        backButtonlabel="Don't have an account"
        backButtonHref="/auth/register"
        showSocial
        >
            LoginForm
        </CardWrapper>
    )
}