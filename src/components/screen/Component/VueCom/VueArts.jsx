import ReactMarkdown from "react-markdown";
import { vueArt } from '../../../../data/VueComData';
import CopyToClip from "../../../shared/CopyToClip";
const VueArts = () => {
  
  const markdown = `
  \`\`\`
  <script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import AlertWarning from '@/components/Alerts/AlertWarning.vue'
import AlertSuccess from '@/components/Alerts/AlertSuccess.vue'
import AlertError from '@/components/Alerts/AlertError.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref } from 'vue'

const pageTitle = ref('Alerts')
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->
  
    <div
      class="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9"
    >
      <div class="flex flex-col gap-7.5">
        <!-- ====== AlertWarning Start -->
        <AlertWarning />
        <!-- ====== AlertWarning End -->
  
        <!-- ====== AlertSuccess Start -->
        <AlertSuccess />
        <!-- ====== AlertSuccess End -->
  
        <!-- ====== AlertError Start -->
        <AlertError />
        <!-- ====== AlertError End -->
      </div>
    </div>
  </DefaultLayout>
</template>
  \`\`\`
  `;

  return (
    <div className="pt-20">
    {vueArt.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">
            {item.description}
          </p>
          <div>
            <img src={item.formImg} alt="form-input" />
          </div>
          <p className="text-headingText leading-6">{item.markText}</p>
        </div>
      ))}
      <div className="mt-8 w-full relative">
        <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
          <CopyToClip markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default VueArts;