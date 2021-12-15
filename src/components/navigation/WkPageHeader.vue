<template>
  <div>
    <a-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-button key="3">Operation</a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button>
      </template>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
        <a-descriptions-item label="Association">
          <a>421421</a>
        </a-descriptions-item>
        <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
        <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
        <a-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>
    <br />
    <a-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template #tags>
        <a-tag color="blue">Running</a-tag>
      </template>
      <template #extra>
        <a-button key="3">Operation</a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button>
      </template>
      <a-row type="flex">
        <a-statistic title="Status" value="Pending" />
        <a-statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
        />
        <a-statistic title="Balance" prefix="$" :value="3345.08" />
      </a-row>
    </a-page-header>
  </div>
</template>

<style scoped lang="less">
@color: red;
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
.demo-page-header{
  color: @color;
}
</style>