/*第一個 li 利用 :class 動態屬性的寫法，讓特定的 class 能根據資料變化來動態顯示移除
    {'disabled':pagination.current_page === 1} 判斷當前頁碼是否在第一頁，是的話就顯示 disabled 樣式，禁止點擊上一頁按鈕
    <a> 用來觸發上一頁的按鈕，getProducts(pagination.current_page - 1) 表示取得當前頁碼再 - 1 頁的產品資料，進而取得上一頁資料 */
/*第二個 li 是用於渲染所有頁碼
      利用 v-for 遍歷 pagination.total_pages 總頁碼 
      利用 :class 動態屬性的寫法，判斷 item 是否與當前頁碼相同
      若相同就顯示 active 樣式，讓使用者得知自己目前處於第幾頁
      裡面的 <a> 標籤則是直接代入 item 執行 getProducts(item)，取得當前頁碼的產品資料*/
/*第三個 li 就是下一頁的功能，
        基本上與上一頁寫法相同
        只需調整 :class="{'disabled' : pagination.current_page === pagination.total_pages}"
         getProducts 代入的參數調整成 getProducts(pagination.current_page + 1)
*/
export default {
    props: ['pagination','getProducts'],
    template: `<nav aria-label="Page navigation example">
            <ul class="pagination">
              <li 
                class="page-item" 
                :class="{'disabled' : pagination.current_page === 1}"
              >
                <a 
                  class="page-link" href="#" 
                  @click.prevent="getProducts(pagination.current_page - 1)"  
                  aria-label="Previous"
                >
                   <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li 
                v-for="(item, index) in pagination.total_pages" :key="index"
                class="page-item" 
                :class="{'active':item === pagination.current_page}"
               >
                  <a 
                    class="page-link" 
                    href="#" 
                    @click.prevent="getProducts(item)"
                  >{{ item }}</a>
              </li>
              <li 
                class="page-item" 
                :class="{'disabled' : pagination.current_page === pagination.total_pages}"
              >
                  <a 
                    class="page-link" 
                    href="#" 
                    @click.prevent="getProducts(pagination.current_page + 1)"  
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
              </li>
            </ul>
          </nav>`,
}