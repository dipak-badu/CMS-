# SDLC (CMS application, Content Management System, ecom, blog, porto, news, ngion, MIS, hotel, chat )

Software Development Lifecycle
Requirement Gathering and Analysis - Ecom- CMS
Product
Category
Brand
Order,
users
payments
Designing - Web design(Designer)
Development - Architecture

# Folder and File structure

/src/
assets/
images/
css/
...
components/
ui/
card/
SingleCard
common/
course/
SingleCourseComponent
-> card
header/
filesFor Header
footer/
.....
pages/  
 on any url change-> we need a new view
auth/
login/
register/
active/
forget-password/
reset-password/

# Tailwind Installation Step

Run pnpm i tailwindcss @tailwindcss/vite
Add import tailwindcss from "@tailwindcss/vite" at top of vite.config.ts
Add tailwindcss() inside plugins: [{ ...., tailwindcss()}] in vite.config.ts
import css at your global css @import "tailwindcss"; in your ./assets/css/global.css
import global at main.tsx import "./assets/css/global.css"
Use css at your component
Restart your dev server pnpm dev
React Hooks
Every hook function starts with use keyword
can only be used within functional components
Manipulation of any states/hooks are only allowed after component is mounted once
State and Effect Hooks
useState and useEffect
Context
useContext
Performance
useMemo, useCallback, useRef
Reducers
useReducer,
Use
useEffect => use
useEffect(() => {
// activity tracking
console.log("I am always exectued")
})

useEffect(() => {
console.log("I am only called for the first time when component is mounted")
return () => {
setLoading(true);
}
}, [])

useEffect(() => {
console.log("I am always exectued when credential state is manipulated")
}, [credentials, loading])

# important HTTP responce status codes

-200 : ok
-201 : created
-202 : accepted
-204 : no content
-301 : Moved permantntly
-304 : NOt modified
-308 : Permanatant requiest
-400 : Bad request
-401 : Anautorized
-403 :forbidden
-404 : not found
-408 : request timeout
-422 : unproskill
-500
-502

# //! AuthContext -> AuthProvider -> useAuth -> LoginForm

AuthContext -> function decleration
AuthProvider -> function definition
useAuth -> custom hook to consume the context
LoginForm -> component that uses the useAuth hook to perform login operations

# //? how role based routing is implemented in this code?

role based routing is implemented using the PermissionCheck component. this component takes the allowRole prop, which is the role that is allowed to access the page. it also uses the useAuth hook to get the details of the logged in user, including their role. if the user's role does not match the allowRole prop, it will redirect them to their respective dashboard or show them an error message. this way we can ensure that only authorized users can access the pages that they are allowed to access, and we can also provide a better user experience by redirecting them to their respective dashboards instead of showing them an error message or a blank page.

# code optimization

1.code splitting -> we can split the code into smaller chunks and load them on demand. for example, we can create a separate component for the user list and load it only when the user navigates to the user list page. this will reduce the initial load time of the application and improve the performance. we can use React.lazy and Suspense to achieve this.
2.memoization -> we can use React.memo to memoize the components and prevent unnecessary re-renders. for example, we can memoize the user list component and only re-render it when the props change. this will improve the performance of the application by reducing the number of re-renders.
3.useCallback -> we can use useCallback to memoize the functions and prevent unnecessary re-creations. for example, we can memoize the getAllUsers and getSearchedUsers functions and only re-create them when the dependencies change. this will improve the performance of the application by reducing the number of function re-creations.
4.useMemo -> we can use useMemo to memoize the values and prevent unnecessary re-calculations. for example, we can memoize the filtered users list and only re-calculate it when the dependencies change. this will improve the performance of the application by reducing the number of unnecessary calculations.
5.lazy loading -> we can use lazy loading to load the images and other resources on demand. for example, we can use the loading="lazy" attribute on the img tag to load the images only when they are in the viewport. this will improve the performance of the application by reducing the initial load time and improving the user experience.

# context

- Decleration (create craeateContext)
- Defination (contex Provider setup)
- Consume (custome hook, useContext)

# Redux

- Decleration (store , cinfigureStore)
- Provider (Global Provider / reducer)
- consume/Listener/state/(Hook)
