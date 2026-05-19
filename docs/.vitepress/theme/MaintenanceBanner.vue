<template>
  <aside class="asp-maintenance-banner" role="status" aria-label="Project status">
    <div class="asp-maintenance-banner__inner">
      <span class="asp-maintenance-banner__icon" aria-hidden="true">⚠️</span>
      <div class="asp-maintenance-banner__text">
        <strong>Agent Starter Pack is in maintenance mode.</strong>
        Active development has moved to
        <a
          href="https://github.com/google/agents-cli"
          target="_blank"
          rel="noopener noreferrer"
        ><code>agents-cli</code></a>.
        ASP receives critical fixes only — no new features.
        <a
          href="https://google.github.io/agents-cli/"
          target="_blank"
          rel="noopener noreferrer"
          class="asp-maintenance-banner__cta"
        >Switch now →</a>
        <a
          href="https://google.github.io/agents-cli/reference/from-agent-starter-pack/"
          target="_blank"
          rel="noopener noreferrer"
        >Migration guide</a>
      </div>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
.asp-maintenance-banner {
  margin: 0 0 24px;
}

.asp-maintenance-banner__inner {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%);
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 12px 16px;
  color: #78350f;
  font-size: 14px;
  line-height: 1.5;
}

.asp-maintenance-banner__icon {
  font-size: 16px;
  flex-shrink: 0;
  line-height: 1.5;
}

.asp-maintenance-banner__text {
  flex: 1;
}

.asp-maintenance-banner__text a {
  color: #b45309;
  text-decoration: underline;
  font-weight: 500;
}

.asp-maintenance-banner__text a:hover {
  color: #78350f;
}

.asp-maintenance-banner__text code {
  background: rgba(120, 53, 15, 0.08);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 13px;
}

.asp-maintenance-banner__cta {
  margin-left: 4px;
  font-weight: 600;
}

.dark .asp-maintenance-banner__inner {
  background: linear-gradient(90deg, #422006 0%, #78350f 100%);
  border-color: #b45309;
  color: #fef3c7;
}

.dark .asp-maintenance-banner__text a {
  color: #fcd34d;
}

.dark .asp-maintenance-banner__text a:hover {
  color: #fef3c7;
}

.dark .asp-maintenance-banner__text code {
  background: rgba(254, 243, 199, 0.1);
}
</style>
