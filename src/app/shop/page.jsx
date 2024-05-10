import ItemCard from "@/components/itemCard/itemCard";
import styles from "./shop.module.css";
import { getItems } from "@/lib/data";

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

const ShopPage = async () => {

  const items = await getItems();
  const user = await currentUser();

  if (!user) return (redirect('/sign-in'));

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          <ItemCard item={item}></ItemCard>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
