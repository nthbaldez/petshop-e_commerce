import { FilterTypes } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export function getCategoryByType(type: FilterTypes) {

  if (type === FilterTypes.DOGS) return "DOGS";
  if (type === FilterTypes.CATS) return "CATS";
  return "";
}

export function getProductsByPriority(priority: PriorityTypes) {
  if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
  if(priority === PriorityTypes.BIGGEST_PRICE)  return {field: "price_in_cents", order: "ASC"}
  if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
  return {field: "sales", order: "DSC"}
}


export const mountQuery = (type: FilterTypes, priority: PriorityTypes) => {
  if(type === FilterTypes.ALL && priority === PriorityTypes.POPULARITY) return `query {
      allProducts(sortField: "sales", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `
  const sortSettings = getProductsByPriority(priority)
  const categoryFilter = getCategoryByType(type)
  return `
  query {
      allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }
  `
}
