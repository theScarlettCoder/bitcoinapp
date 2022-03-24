import React from "react";

const Faqs = () => {
  return (
    <div class="col-lg-12">
      <section class="box has-border-left-3">
        <header class="panel_header">
          <h2 class="title pull-left">FAQ</h2>
          <div class="actions panel_actions pull-right">
            <a class="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
            <a
              class="box_setting fa fa-cog"
              data-toggle="modal"
              href="#section-settings"
              aria-hidden="true"
            ></a>
            <a class="box_close fa fa-times" aria-hidden="true"></a>
          </div>
        </header>
        <div class="content-body">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="mb-20">General Questions</h3>

              {/* <!-- Bootstrap FAQ - START --> */}
              <div class="panel-group no-mb faq-panels" id="accordion">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                      >
                        How do I use my affiliate link ?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium id voluptates, accusamus aliquam,
                        doloribus aperiam ullam tempora nesciunt, architecto
                        vitae molestias. Impedit soluta nulla accusamus! Beatae
                        accusamus eos, inventore aspernatur Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                      >
                        How does the affiliate link work ?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium id voluptates, accusamus aliquam,
                        doloribus aperiam ullam tempora nesciunt, architecto
                        vitae molestias. Impedit soluta nulla accusamus! Beatae
                        accusamus eos, inventore aspernatur Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                      >
                        How bif are the reward ?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseFive" class="panel-collapse collapse">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium id voluptates, accusamus aliquam,
                        doloribus aperiam ullam tempora nesciunt, architecto
                        vitae molestias. Impedit soluta nulla accusamus! Beatae
                        accusamus eos, inventore aspernatur Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSix"
                      >
                        What do you mean by a "Affiliate Ranking System" ?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseSix" class="panel-collapse collapse">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium id voluptates, accusamus aliquam,
                        doloribus aperiam ullam tempora nesciunt, architecto
                        vitae molestias. Impedit soluta nulla accusamus! Beatae
                        accusamus eos, inventore aspernatur Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseEight"
                      >
                        What are the payment options?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseEight" class="panel-collapse collapse">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium id voluptates, accusamus aliquam,
                        doloribus aperiam ullam tempora nesciunt, architecto
                        vitae molestias. Impedit soluta nulla accusamus! Beatae
                        accusamus eos, inventore aspernatur Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseNine"
                      >
                        How do I rank up? Can I move down in rank?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseNine" class="panel-collapse collapse">
                    <div class="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium id voluptates, accusamus aliquam,
                        doloribus aperiam ullam tempora nesciunt, architecto
                        vitae molestias. Impedit soluta nulla accusamus! Beatae
                        accusamus eos, inventore aspernatur Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- bs faq end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
