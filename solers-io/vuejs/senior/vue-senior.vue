<template>
    <div>
        <textarea data-testid="source-text" v-model="sourceText" @input="updateResult" />
        <br />
        <input data-testid="search-term" v-model="searchTerm" @input="updateResult" />
        <br />
        case sensitive ?
        <input type="checkbox" data-testid="case-sensitive" v-model="caseSensitive" @change="updateResult" />
        <div data-testid="result" v-html="highlightedText"></div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            sourceText: "",
            searchTerm: "",
            caseSensitive: false,
        };
    },
    computed: {
        highlightedText() {
            return this.highlightText(this.sourceText);
        },
    },
    methods: {
        updateResult() {
            this.$nextTick(() => {
                const resultElement = this.$refs.result;
                if (resultElement) {
                    resultElement.innerHTML = this.highlightedText;
                }
            });
        },
        highlightText(text) {
            if (this.searchTerm === "") {
                return text;
            }

            const searchTermRegex = new RegExp(
                this.escapeRegExp(this.searchTerm),
                this.caseSensitive ? "g" : "gi"
            );
            return text.replace(searchTermRegex, (match) => `<mark>${match}</mark>`);
        },
        escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        },
    },
};
</script>