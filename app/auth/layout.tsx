
const AuthLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-blue-100">
            {children}
        </div>
     );
}
 
export default AuthLayout;