import { create } from "zustand";

const useArticleStore = create<ArticleState>((set) => ({
  title: "",
  description: "",
  topic: "",
  loading: false,
  setLoading: (loading) => {
    set({ loading });
  },
  titleValidation: false,
  setTitleValidation: (titleValidation) => {
    set({ titleValidation });
  },
  setTopic: (topic) => {
    set({ topic });
  },
  setTitle: (title) => {
    set({ title });
  },
  setDescription: (description) => {
    set({ description });
  },
  imgUrl: undefined,
  setImgUrl: (imgUrl) => {
    set({ imgUrl });
  },
  setPublish: (values: ArticleProps) => {
    console.log(values);
  },
  userArticles: null,
  setUserArticles: (userArticles) => {
    set({ userArticles });
  },
  img: null,
  setImg: (img) => {
    set({ img });
  },
  data: {},
  type: null,
  isOpen: false,
  onClose: () => set({ type: null, isOpen: false }),
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
}));
export default useArticleStore;
