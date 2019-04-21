<!--name: "ElementUITable",-->

<template>
  <div id="app">
    <el-tooltip content="Click on any of the cells or on the edit button to edit content">
      <i class="el-icon-info"></i>
    </el-tooltip>
    <el-table
      :data="gridData"
      style="width: 100%">

      <el-table-column
        label="Operations"
        min-width="180">
        <template slot-scope="{row, index}">
          <el-button icon="el-icon-edit"
                     @click="setEditMode(row, index)">
          </el-button>
          <el-button type="success" icon="el-icon-check"
                     @click="saveRow(row, index)">
          </el-button>
        </template>
      </el-table-column>


      <el-table-column
        label="Name"
        min-width="180">
        <editable-cell :show-input="row.editMode" slot-scope="{row}" v-model="row.name">
          <span slot="content">{{row.name}}</span>
        </editable-cell>
      </el-table-column>
      <el-table-column
        label="GK"
        min-width="180">
        <editable-cell :show-input="row.editMode" slot-scope="{row}" v-model="row.GK">
          <span slot="content">{{row.GK}}</span>
        </editable-cell>
      </el-table-column>
      <el-table-column
        label="PD"
        min-width="180">
        <editable-cell :show-input="row.editMode" slot-scope="{row}" v-model="row.PD">
          <span slot="content">{{row.PD}}</span>
        </editable-cell>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import EditableCell from "./ElementUITable/EditableCell.vue";

  export default {
    name: "ElementUITable1",
    components: {
      EditableCell
    },
    data() {
      return {
        gridData: [
          {
            GK: "2016-05-03",
            name: "Tom",
            PD: "M"
          },{
            GK: "2016-05-03",
            name: "Tom",
            PD: "M"
          },{
            GK: "2016-05-03",
            name: "Tom",
            PD: "M"
          },{
            GK: "2016-05-03",
            name: "Tom",
            PD: "M"
          },
        ]
      };
    },
    methods: {
      setEditMode(row, index) {
        row.editMode = true;
      },
      saveRow(row, index) {
        row.editMode = false;
        console.log(row)
      }
    },
    mounted() {
      this.gridData = this.gridData.map(row => {
        return {
          ...row,
          editMode: false
        };
      });
    }
  };
</script>

<style>
  .edit-cell {
    min-height: 35px;
    cursor: pointer;
  }
</style>

