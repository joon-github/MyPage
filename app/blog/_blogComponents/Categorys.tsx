import React from 'react';
import { baseUrl } from '@/app/utils/baseUrl';
import blogStyles from '../blog.module.scss'
import Category from './Category';
import AddCategory from './AddCategory';

export type CategorysType = {
  category_id?: number,
  category_name: string,
}

// const Categorys = async () => {
//   const config = {
//     headers: {
//       "Accept":"application/json"
//     },
//     next: { revalidate: 5 },
//   }
//   const categoryData = await fetch(`${baseUrl}/api/blog/category`, config);
//   const { result: { rows: categorys } } = await categoryData.json()
//   return (
//     <div className={blogStyles.categoryWrapper}>
//       <AddCategory />
//       {categorys.map(({ category_id, category_name}: CategorysType) => {
//         return (
//           <Category
//             key={category_id}
//             category_id={category_id}
//             category_name={category_name}
//           />
//         )
//       })}
//     </div>
//   );
// };
const Categorys = async () => {
  return (
    <div className={blogStyles.categoryWrapper}>

    </div>
  );
};

export default Categorys;