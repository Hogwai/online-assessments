<template>
  <div>
    <input
      type="text"
      v-model="newItemText"
      @keydown.enter="addItem"
      data-testid="assembly-add-item"
    />
    <div class="item-list">
      <div class="stage-column" v-for="(stage, index) in internalStages" :key="index">
        <div class="stage-name" data-testid="assembly-stage">{{ stage.name }}
          <div class="items">
            <button
              v-for="(item, itemIndex) in stage.items"
              :key="itemIndex"
              @click="moveItemForward(stage, itemIndex)"
              @contextmenu.prevent="moveItemBackward(stage, itemIndex)"
              data-testid="assembly-item"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newItemText: '',
      internalStages: []
    };
  },
  created() {
    this.internalStages = this.stages.map(stageName => ({
      name: stageName,
      items: []
    }));
  },
  methods: {
    addItem() {
      if (this.newItemText !== '') {
        this.internalStages[0].items.unshift(this.newItemText);
        this.newItemText = '';
      }
    },
    moveItemForward(stage, itemIndex) {
      const item = stage.items.splice(itemIndex, 1)[0];
      if (stage === this.internalStages[this.internalStages.length - 1]) {
        return;
      }
      const nextStage = this.internalStages[this.internalStages.indexOf(stage) + 1];
      nextStage.items.unshift(item);
    },
    moveItemBackward(stage, itemIndex) {
      const item = stage.items.splice(itemIndex, 1)[0];
      if (stage === this.internalStages[0]) {
        return;
      }
      const previousStage = this.internalStages[this.internalStages.indexOf(stage) - 1];
      previousStage.items.push(item);
    }
  }
};
</script>

<style>
.assembly-line {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stage-column {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}

.stage-name {
  font-weight: bold;
  margin-bottom: 10px;
}

.item-list {
  display: flex;
  flex-direction: column;
}
</style>
