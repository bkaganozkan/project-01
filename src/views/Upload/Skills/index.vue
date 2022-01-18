<template>
  <div class="card bk-card">
    <div class="card-body">
      <form
        action=""
        @submit.prevent="confirmUpload"
      >
        <div class="row">
          <div class="col">
            <div>
              <label
                class="f-18 f-w-bold f-left"
                for=""
              >Section</label>
            </div>
            <div>
              <v-select
                v-model="section"
                :multi="false"
                :options="sectionOption"
              />
            </div>
            <label
              class="f-18 f-w-bold f-left"
              for=""
            >Property</label>
            <input
              v-model="uploadData.property"
              required
              type="text"
              class="form-control"
            >
            <label
              class="f-18 f-w-bold f-left"
              for=""
            >Value</label>
            <input
              v-model="uploadData.value"
              required
              type="text"
              class="form-control"
            >
            <label
              class="f-18 f-w-bold f-left"
              for=""
            >Description</label>
            <textarea
              v-model="uploadData.description"
              type="text"
              class="form-control"
            />
            <button class="confirm-btn">
              Confirm
            </button>
          </div>
          <div class="col" />
        </div>
      </form>

      <div
        class="check-upload"
        :class="!hold ? 'hold':'ready' "
      />
    </div>
  </div>
</template>

<script>
import { prepareUploadData } from "../uploadHelper";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
export default {
  name: "UploadSkills",
  components:{
    vSelect
  },
  data(){
    return{
      sectionOption:['Circle 1', 'Circle 2'],
      section:'',
      uploadData:{
        property:'',
        propertyColor:'#753188',
        value:'',
        valueColor:'#E59934',
        description:'',
      },      
      hold:true,
    }
  },
  created() {
  },
  methods:{
    confirmUpload(){
      this.hold = false
      prepareUploadData(this.section,this.uploadData).then(res => this.hold = res)
    }
  },
  
};
</script>

<style scoped>
.bk-card{
  background-color: #FFBC97;
}

.confirm-btn{
  float:right;
  margin-top:10px;
  border-width: 0;
  background-color: #FF7800;
  color:whitesmoke;
  border-radius: 25%;
  width: 100px;
  height: 50px;
}

.check-upload{
  width: 100px;
  height: 100px;  
}
.check-upload.hold{
  background-color: red;
}
.check-upload.ready{
  background-color: green;
}
</style>