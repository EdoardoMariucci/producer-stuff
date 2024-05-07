import ItemCard from "@/components/itemCard/itemCard";
import styles from "./shop.module.css";
//import { getPosts } from "@/lib/data";

const ShopPage = async () => {

  // FETCH DATA WITH AN API
  //const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ItemCard />
      </div>

      <div className={styles.item}>
        <ItemCard />
      </div>

      <div className={styles.item}>
        <ItemCard />
      </div>


    </div>
  );
};

export default ShopPage;
