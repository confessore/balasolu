<script lang="ts" context="module">
  export interface BreadcrumbItem {
    name: string;
    url: string;
  }
  
  export interface BreadcrumbProps {
    items: BreadcrumbItem[];
  }
</script>

<script lang="ts">
  export let items: BreadcrumbItem[] = [];
</script>

<nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-sm">
  {#each items as item, index}
    {#if index > 0}
      <span class="text-slate-500">/</span>
    {/if}
    <a 
      href={item.url} 
      class="text-slate-400 hover:text-blue-400 transition-colors"
      aria-current={index === items.length - 1 ? 'page' : undefined}
    >
      {item.name}
    </a>
  {/each}
</nav>
