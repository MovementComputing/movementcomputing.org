<template>
  <span class="bibtex-entry" :class="`bibtex-entry-${entry.type}`">
    <span v-if="entry.author" class="bibtex-entry-author"
      >{{ authorList(entry.author) }},</span
    >
    <!-- Entry Type: Article -->
    <span v-if="entry.type === 'article'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <i v-if="entry.journal" class="bibtex-entry-journal">
        {{ entry.journal }}</i
      >
      <span v-if="entry.volume" class="bibtex-entry-volume"
        >, vol. {{ entry.volume
        }}{{ entry.number ? `, no. ${entry.number}` : "" }}</span
      >,
    </span>
    <!-- Entry Type: InProceedings -->
    <span v-if="entry.type === 'paper-conference'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <i v-if="entry['container-title']" class="bibtex-entry-booktitle">
        {{ entry["container-title"] }}
        <span v-if="entry['collection-title']" class="bibtex-entry-series">
          ({{ entry["collection-title"] }}) </span
        >,
      </i>
      <span v-if="entry.volume" class="bibtex-entry-volume">
        vol. {{ entry.volume }}
        {{ entry.number ? `, no. ${entry.number}` : "" }},
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
      <span v-if="entry.publisher" class="bibtex-entry-publisher">
        {{ entry.publisher }},
      </span>
    </span>
    <!-- Entry Type: Book -->
    <span v-if="entry.type === 'book'">
      <i v-if="entry.title" class="bibtex-entry-title"> {{ entry.title }}. </i>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
      <span v-if="entry.publisher" class="bibtex-entry-publisher">
        {{ entry.publisher }},
      </span>
    </span>
    <!-- Entry Type: PhD Thesis -->
    <span v-if="entry.type === 'phdthesis'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span class="bibtex-entry-type">PhD Dissertation, </span>
      <span v-if="entry.school" class="bibtex-entry-school">{{
        entry.school
      }}</span>
      <span v-if="entry.address" class="bibtex-entry-address"
        >, {{ entry.address }}</span
      >
      <span v-if="entry.publisher" class="bibtex-entry-publisher">
        : {{ entry.publisher }} </span
      >.
    </span>
    <!-- Entry Type: Master's Thesis -->
    <span v-if="entry.type === 'mastersthesis'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span class="bibtex-entry-type">Master's Thesis, </span>
      <span v-if="entry.school" class="bibtex-entry-school">{{
        entry.school
      }}</span>
      <span v-if="entry.address" class="bibtex-entry-address"
        >, {{ entry.address }}</span
      >
      <span v-if="entry.publisher" class="bibtex-entry-publisher">
        : {{ entry.publisher }} </span
      >.
    </span>
    <!-- Entry Type: Book Chapter -->
    <span v-if="entry.type === 'inbook' || entry.type === 'incollection'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <i v-if="entry.booktitle" class="bibtex-entry-booktitle">
        {{ entry.booktitle }}
        <span v-if="entry.series" class="bibtex-entry-series">
          ({{ entry.series }})
        </span>
      </i>
      <span v-if="entry.editor" class="bibtex-entry-editor"
        >, {{ entry.editor }}, Ed</span
      >
      <span v-if="entry.address" class="bibtex-entry-address"
        >, {{ entry.address }}</span
      >
      <span v-if="entry.publisher" class="bibtex-entry-publisher">
        : {{ entry.publisher }}</span
      >.
    </span>
    <!-- Entry Type: Booklet -->
    <span v-if="entry.type === 'booklet'">
      <i v-if="entry.title" class="bibtex-entry-title"> {{ entry.title }}. </i>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }}
      </span>
      <span v-if="entry.editor" class="bibtex-entry-editor"
        >, {{ entry.editor }}, Ed</span
      >
      <span v-if="entry.publisher" class="bibtex-entry-publisher"
        >: {{ entry.publisher }}</span
      >.
    </span>
    <!-- Entry Type: Manual -->
    <span v-if="entry.type === 'manual'">
      <i v-if="entry.title" class="bibtex-entry-title"> {{ entry.title }}. </i>
      <span v-if="entry.edition" class="bibtex-entry-edition">
        {{ entry.edition }},
      </span>
      <span v-if="entry.organization" class="bibtex-entry-organization">
        {{ entry.organization }},
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
    </span>
    <!-- Entry Type: Proceedings -->
    <span v-if="entry.type === 'proceedings'">
      <span v-if="entry.editor" class="bibtex-entry-editor">
        {{ entry.editor }},
      </span>
      <i v-if="entry.title" class="bibtex-entry-title"> {{ entry.title }}. </i>
      <span v-if="entry.volume" class="bibtex-entry-volume"
        >, vol. {{ entry.volume
        }}{{ entry.number ? `, no. ${entry.number}` : "" }}</span
      >
      <span v-if="entry.organization" class="bibtex-entry-organization">
        {{ entry.organization }},
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
      <span v-if="entry.publisher" class="bibtex-entry-publisher"
        >: {{ entry.publisher }},</span
      >
    </span>
    <!-- Entry Type: Technical Report -->
    <span v-if="entry.type === 'techreport'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span v-if="entry.institution" class="bibtex-entry-institution">
        {{ entry.institution }},
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
      <span v-if="entry.type" class="bibtex-entry-type">
        {{ entry.type }},
      </span>
      <span v-if="entry.numbre" class="bibtex-entry-numbre">
        {{ entry.numbre }},
      </span>
    </span>
    <!-- Entry Type: Unpublished -->
    <span v-if="entry.type === 'unpublished'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span v-if="entry.note" class="bibtex-entry-note">
        {{ entry.note }},
      </span>
    </span>
    <!-- Entry Type: Electronic -->
    <span v-if="entry.type === 'electronic'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span v-if="entry.organization" class="bibtex-entry-organization">
        {{ entry.organization }},
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
      <span v-if="entry.note" class="bibtex-entry-note">
        {{ entry.note }},
      </span>
    </span>
    <!-- Entry Type: Patent -->
    <span v-if="entry.type === 'patent'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span v-if="entry.nationality" class="bibtex-entry-nationality">
        {{ entry.nationality }}
      </span>
      <span v-if="entry.number" class="bibtex-entry-number">
        {{ entry.number }},
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }},
      </span>
      <span v-if="entry.note" class="bibtex-entry-note">
        {{ entry.note }},
      </span>
    </span>
    <!-- Entry Type: Periodical -->
    <span v-if="entry.type === 'periodical'">
      <span v-if="entry.editor" class="bibtex-entry-editor">
        {{ entry.editor }},
      </span>
      <i v-if="entry.title" class="bibtex-entry-title"> {{ entry.title }}. </i>
      <span v-if="entry.series" class="bibtex-entry-series">
        ({{ entry.series }}),
      </span>
      <span v-if="entry.volume" class="bibtex-entry-volume"
        >, vol. {{ entry.volume
        }}{{ entry.number ? `, no. ${entry.number}` : "" }}</span
      >
      <span v-if="entry.organization" class="bibtex-entry-organization">
        {{ entry.organization }}.
      </span>
      <span v-if="entry.note" class="bibtex-entry-note">
        {{ entry.note }}.
      </span>
    </span>
    <!-- Entry Type: Standard -->
    <span v-if="entry.type === 'standard'">
      <i v-if="entry.title" class="bibtex-entry-title"> {{ entry.title }}. </i>
      <span v-if="entry.type" class="bibtex-entry-type">
        {{ entry.type }},
      </span>
      <span v-if="entry.number" class="bibtex-entry-number">
        {{ entry.number }},
      </span>
      <span v-if="entry.organization" class="bibtex-entry-organization">
        {{ entry.organization }}.
      </span>
      <span v-if="entry.institution" class="bibtex-entry-institution">
        {{ entry.institution }}.
      </span>
      <span v-if="entry.note" class="bibtex-entry-note">
        {{ entry.note }}.
      </span>
    </span>
    <!-- Entry Type: Miscellaneous -->
    <span v-if="entry.type === 'misc'">
      <span v-if="entry.title" class="bibtex-entry-title">
        &ldquo;{{ entry.title }},&rdquo;
      </span>
      <span v-if="entry.organization" class="bibtex-entry-organization">
        {{ entry.organization }}.
      </span>
      <span v-if="entry.institution" class="bibtex-entry-institution">
        {{ entry.institution }}.
      </span>
      <span v-if="entry.address" class="bibtex-entry-address">
        {{ entry.address }}.
      </span>
      <span v-if="entry.note" class="bibtex-entry-note">
        {{ entry.note }}.
      </span>
    </span>
    <span class="bibtex-entry-date"
      >{{ entry.month || "" }}
      {{ entry.issued["date-parts"][0][0] || "" }}</span
    >
    <span
      v-if="
        entry.chapter &&
        (entry.type === 'inbook' || entry.type === 'incollection')
      "
      class="bibtex-entry-chapter"
      >, ch. {{ entry.chapter }}</span
    >
    <span v-if="entry.pages" class="bibtex-entry-pages"
      >, pp. {{ entry.pages }}</span
    >
    <span v-if="entry.langue" class="bibtex-entry-langue"
      >(in {{ entry.langue }})</span
    >.
    <span v-if="entry.id" class="bibtex-entry-doi"
      >DOI: <a :href="`http://dx.doi.org/${entry.id}`">{{ entry.id }}</a></span
    >
    <span v-if="!entry.doi && entry.url" class="bibtex-entry-url"
      >URL: <a :href="entry.url">{{ entry.url }}</a></span
    >.
  </span>
</template>

<script>
export default {
  props: ["entry"],
  methods: {
    authorList(authors) {
      if (authors.length > 1) {
        authors = authors
          .slice(0, -1)
          .reduceRight(
            (previousValue, { given, family }) =>
              `${given} ${family}, ${previousValue}`,
            `and ${authors.slice(-1)[0].given} ${authors.slice(-1)[0].family}`
          );
      } else {
        authors = `${authors[0].given} ${authors[0].family}`;
      }
      return authors;
    },
  },
};
</script>
