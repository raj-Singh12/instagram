// import Header from "@/app/components/Header";
// import { getProviders, signIn } from "next-auth/react";
// import LogoMobile from "../../../../public/Instagram_logo_mobile.png";

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }

// export default function signin({ providers }) {
//   // const checkProviders = providers && providers.length;

//   return (
//     <div>
//       <Header />
//       <div className="flex justify-center space-x-7 mt-20">
//         <img
//           className="hidden object-cover rotate-6 md:inline-flex md:w-48"
//           src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/hero-top/instagram/opera__feature--instagram__mobile@2x.29d5a13aac0f.png"
//           alt="instagram"
//         />

//         <div className="">
//           {checkProviders &&
//             Object.values(providers).map((provider) => (
//               <div key={provider.name} className="flex flex-col items-center">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
//                   alt="Logo"
//                   layout="fill"
//                   className="w-32 object-cover"
//                 />
//                 <p className="text-sm italic my-10 text-center">
//                   This App is created for learning
//                 </p>
//                 <button
//                   onClick={() => signIn(provider.id, { callbackUrl: "/" })}
//                   className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
//                 >
//                   Sign in with {provider.name}
//                 </button>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { getProviders, signIn } from "next-auth/react";
import Header from "@/app/components/Header";

export default function Signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image"
        />
        <div className="">
          {/* {Object.values(providers).map((provider)=>(
                  <div key={provider.name}  className="flex flex-col items-center">
                      <img className="w-32 object-cover"  src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png" alt="" />
                      <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
                      <button onClick={()=> signIn(provider.id, {callbackUrl: "/"})}  className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                  </div>
              ))} */}

          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover"
              src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
              alt=""
            />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
              Sign in with
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
