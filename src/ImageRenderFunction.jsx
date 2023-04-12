import { arrayForList } from "./arrayForList";


function Image({ src, name }) {
   return <img src={src} alt={name} />;
 }
 
 function ImageList({ images }) {
   return (
     <div>
       {images.map((image) => (
         <Image key={image.id} src={image.src} name={image.name} style='w-2' />
       ))}
     </div>
   );
 }
 
 
 export function ImageRender() {
   return <ImageList images={arrayForList} />;
 }