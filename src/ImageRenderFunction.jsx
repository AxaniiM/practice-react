import { arrayForList } from "./arrayForList";


function Image({ src, name }) {
   return <img className="h-10 w-10" src={src} alt={name} />;
 }
 
 function ImageList({ images }) {
   return (
     <div>
       {images.map((image) => (
         <Image key={image.id} src={image.src} name={image.name}/>
       ))}
     </div>
   );
 }
 
 
 export function ImageRender() {
   return <ImageList images={arrayForList} />;
 }