import ItemCard from "@/components/itemCard/itemCard";
import styles from "./shop.module.css";
import { getItems } from "@/lib/data";

const ShopPage = async () => {

  // FETCH DATA WITHOUT AN API
  const items = await getItems();

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
