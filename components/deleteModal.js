export default {
    props:['tempProduct','delProduct'],
    data() {
        return {
            deleteModal : null
        };
      },
    methods: {
        // 顯示 modal
        showModal(){
            this.deleteModal.show();
        },
         // 關閉 modal
        closeModal(){
            this.deleteModal.hide();
        },
    },
    mounted(){
        this.deleteModal = new bootstrap.Modal(this.$refs.deleteModal,{
            keyboard: false,
            backdrop: 'static'
       });
    },
    template:`<div id="deleteModal" ref="deleteModal" class="modal fade" tabindex="-1"
    aria-labelledby="deleteModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
            <h5 id="deleteModel" class="modal-title">
            <span>刪除產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
            </button>
        </div>
        </div>
    </div>
    </div>`,
}