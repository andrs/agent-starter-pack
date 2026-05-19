<template>
  <aside class="asp-home-banner" role="status" aria-label="Project status">
    <div class="asp-home-banner__inner">
      <span class="asp-home-banner__icon" aria-hidden="true">⚠️</span>
      <span class="asp-home-banner__text">
        <strong>Agent Starter Pack is in maintenance mode.</strong>
        Active development has moved to
        <a
          href="https://github.com/google/agents-cli"
          target="_blank"
          rel="noopener noreferrer"
        ><code>agents-cli</code></a>.
        ASP receives critical fixes only — no new features.
      </span>
      <span class="asp-home-banner__actions">
        <a
          href="https://google.github.io/agents-cli/"
          target="_blank"
          rel="noopener noreferrer"
          class="asp-home-banner__cta"
        >Switch now →</a>
        <a
          href="https://google.github.io/agents-cli/reference/from-agent-starter-pack/"
          target="_blank"
          rel="noopener noreferrer"
          class="asp-home-banner__link"
        >Migration guide</a>
      </span>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
.asp-home-banner {
  max-width: 1152px;
  margin: 24px auto 0;
  padding: 0 24px;
}

.asp-home-banner__inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 16px;
  background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%);
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 14px 20px;
  color: #78350f;
  font-size: 14px;
  line-height: 1.5;
}

.asp-home-banner__icon {
  font-size: 18px;
  flex-shrink: 0;
}

.asp-home-banner__text {
  flex: 1;
  min-width: 280px;
}

.asp-home-banner__text a {
  color: #b45309;
  text-decoration: underline;
  font-weight: 500;
}

.asp-home-banner__text code {
  background: rgba(120, 53, 15, 0.08);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 13px;
}

.asp-home-banner__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.asp-home-banner__cta {
  background: #b45309;
  color: #fffbeb !important;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none !important;
  white-space: nowrap;
  transition: background 0.15s;
}

.asp-home-banner__cta:hover {
  background: #78350f;
}

.asp-home-banner__link {
  color: #b45309;
  text-decoration: underline;
  font-weight: 500;
  white-space: nowrap;
}

.asp-home-banner__link:hover {
  color: #78350f;
}

.dark .asp-home-banner__inner {
  background: linear-gradient(90deg, #422006 0%, #78350f 100%);
  border-color: #b45309;
  color: #fef3c7;
}

.dark .asp-home-banner__text a,
.dark .asp-home-banner__link {
  color: #fcd34d;
}

.dark .asp-home-banner__text a:hover,
.dark .asp-home-banner__link:hover {
  color: #fef3c7;
}

.dark .asp-home-banner__text code {
  background: rgba(254, 243, 199, 0.1);
}

.dark .asp-home-banner__cta {
  background: #fcd34d;
  color: #422006 !important;
}

.dark .asp-home-banner__cta:hover {
  background: #fef3c7;
}
</style>
