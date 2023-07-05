<template>
  <div class="container">
    <h1 style="padding: 20px 0">Table Layout</h1>
    <div class="mb-5">
      <button
        class="btn btn-outline-primary mb-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModals"
        data-bs-whatever="@mdo"
      >
        Add status
      </button>
      <button
        class="btn btn-outline-primary mb-2"
      >
        Export
      </button>
      <div class="d-flex align-items-center gap-3">
        <label for="Search">Search</label>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with segmented dropdown button"
        />
      </div>
    </div>
    <table class="table table-striped table-dark table-hover">
      <thead>
        <tr>
          <th v-for="col in column" scope="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in currentDataInPage" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td class="col-2">
            <button
              class="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              style="display: inline-block"
              data-bs-target="#exampleModal"
              id="item.id"
              @click="(e: MouseEvent) => clickDetail(item, e)"
            >
              Detail
            </button>
            <button
              class="btn btn-outline-primary btn-sm ms-2"
              style="display: inline-block"
              data-bs-target="#exampleModals"
              data-bs-toggle="modal"
              @click="(e:MouseEvent) => clickDetailUpdate(item, e)"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          :class="`page-item cursor-pointer ${
            pagination.pageNumber === 1 ? 'disabled' : ''
          }`"
          @click="previos"
        >
          <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li
          v-for="(page, index) in pagiPage"
          :class="`page-item cursor-pointer ${
            pagination.pageNumber === page && page !== 0 ? 'active' : ''
          } ${page === 0 ? 'disabled' : ''}`"
          :key="index"
          @click="clickCurrentPage(page)"
        >
          <a class="page-link" tabindex="-1" aria-disabled="true">{{
            page !== 0 ? page : "..."
          }}</a>
        </li>
        <li
          :class="`page-item cursor-pointer ${
            pagination.pageNumber === countPage ? 'disabled' : ''
          }`"
          @click="next"
        >
          <a class="page-link" tabindex="-1" aria-disabled="true">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Detail</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h4>{{ valueDetail.title }}</h4>
          <p>{{ valueDetail.body }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModals"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New table</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModel"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Title:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="value.title"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Body:</label>
              <textarea
                class="form-control"
                id="message-text"
                v-model="value.body"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModel"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addStatus"
            data-bs-dismiss="modal"
          >
            Add
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="saveUpdate"
            data-bs-dismiss="modal"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  data() {
    return {
      value: {
        title: "",
        body: "",
      },
      column: ["Status", "Title", "Complete", "Action"],
      v: "",
    };
  },
  setup() {
    const idx: Ref<number> = ref(1);
    const pagination = reactive<{
      pageSize: number;
      totalRecord: number;
      pageNumber: number;
    }>({ pageSize: 10, totalRecord: 0, pageNumber: 1 });
    const updateDetail = reactive<{
      id: number;
      userId: number;
      title: string;
      body: string;
    }>({ id: 0, userId: 0, title: "", body: "" });
    const valueDetail = reactive<{
      title: string;
      body: string;
    }>({ title: "", body: "" });
    const data: Ref<
      {
        userId: number;
        id: number;
        title: string;
        body: string;
      }[]
    > = ref<
      {
        userId: number;
        id: number;
        title: string;
        body: string;
      }[]
    >([]);
    return { valueDetail, data, updateDetail, pagination, idx };
  },
  created: function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        this.pagination.totalRecord = data.length;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    clickDetail(
      _value: {
        userId: number;
        id: number;
        title: string;
        body: string;
      },
      e: MouseEvent
    ): void {
      const el: HTMLButtonElement = e.target as HTMLButtonElement;
      this.v = el.innerText;
      this.valueDetail.title = _value.title;
      this.valueDetail.body = _value.body;
    },
    clickDetailUpdate(
      _value: {
        userId: number;
        id: number;
        title: string;
        body: string;
      },
      e: MouseEvent
    ): void {
      const el: HTMLButtonElement = e.target as HTMLButtonElement;
      this.v = el.innerText;
      this.value.title = _value.title;
      this.value.body = _value.body;
      this.updateDetail.id = _value.id;
      this.updateDetail.userId = _value.userId;
      this.updateDetail.title = _value.title;
      this.updateDetail.body = _value.body;
    },
    addStatus() {
      const newValue = {
        userId: 1,
        id: this.data.length + 1,
        title: this.value.title,
        body: this.value.body,
      };
      this.data.push(newValue);
      this.value.body = "";
      this.value.title = "";
      this.pagination.totalRecord = this.data.length
      
    },
    saveUpdate(): void {
      this.data = this.data.map((item) => {
        if (item.id === this.updateDetail.id) {
          return {
            ...item,
            title: this.value.title,
            body: this.value.body,
          };
        } else {
          return item;
        }
      });
      this.value.body = "";
      this.value.title = "";
    },
    closeModel() {
      this.value.title = "";
      this.value.body = "";
    },
    previos(): void {
      if (this.idx > 1) {
        this.idx--;
        this.pagination.pageNumber = this.idx;
      }
    },
    next(): void {
      if (this.idx < 10) {
        this.idx++;
        this.pagination.pageNumber = this.idx;
      }
    },
    clickCurrentPage(v: number): void {
      this.pagination.pageNumber = v;
    },
  },
  computed: {
    checkData() {
      return this.data
    },
    countPage() {
      return Math.ceil(this.pagination.totalRecord / this.pagination.pageSize);
    },
    pagiPage() {
      let pages: number[] = [];
      let i: number = 1;
      for (i; i <= this.countPage; i++) {
        if (
          i === 1 ||
          i === this.countPage ||
          (i <= this.pagination.pageNumber + 2 &&
            i >= this.pagination.pageNumber - 2)
        ) {
          pages.push(i);
        } else if (
          i === this.pagination.pageNumber + 3 ||
          i === this.pagination.pageNumber - 3
        ) {
          pages.push(0);
        }
      }
      return pages;
    },
    currentDataInPage() {
      const firstPageIndex =
        (this.pagination.pageNumber - 1) * this.pagination.pageSize;
      const lastIndex = firstPageIndex + this.pagination.pageSize;
      return this.checkData.slice(firstPageIndex, lastIndex);
    },
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.button {
  border: none;
  outline: none;
  padding: 0.4rem 1rem;
  background: gray;
  color: white;
}
</style>
