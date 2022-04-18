(function () {


    const SlideRange = Vue.component('SlideRangeComponent', {
        name: 'SlideRangeComponent',

        data: function () {
            return {
                resultArray: [],
                arrayFirst: String,
                arrayLast: String
            }
        },

        props: {
            sl: Object
        },

        methods: {
            changeResult: function () {
                this.$emit('on_change_result', {
                    value: this.resultArray
                })
            }
        },

        mounted: function () {

            this.arrayFirst = this.sl.option[0].title
            this.arrayLast = this.sl.option[this.sl.option.length - 1].title

            var _this = this;

            if (document.querySelector('#slider-pips')) {
                var pipsSlider = document.getElementById('slider-pips');

                noUiSlider.create(pipsSlider, {
                    start: [3],
                    step: 1,
                    connect: 'lower',
                    format: {
                        to: function (value) {
                            return value + '';
                        },
                        from: function (value) {
                            return Number(value.replace(',-', ''));
                        }
                    },
                    range: {
                        'min': [0],
                        'max': [Number(_this.sl.option.length)]
                    },

                    pips: {
                        mode: 'steps',
                        density: 20,

                    }
                });

                pipsSlider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions, noUiSlider) {
                    document.querySelector('.pf-slider__input input').value = values
                    _this.resultArray[0] = values
                    _this.changeResult()
                })
            }
        },

        template: `
      <div v-cloak >
          <div class="pf-quiz__title">{{sl.question}}</div>
          <div class="pf-quiz__subtitle" v-if="sl.desc">{{sl.desc}}</div>
          <div class="pf-quiz__info">
              <div class="pf-info">
                  <div v-if="sl.multiple " class="pf-info__options">Выберите один или несколько вариантов ответа</div>
                  <div v-if="sl.skip "class="pf-info__skip">Можно пропустить</div>
              </div>
          </div>
          <div class="pf-quiz__content">
              <div class="pf-quiz__answer">
              <div class="pf-slider">
                  <div class="pf-slider__text">
                      <ul>
                          <li>{{arrayFirst}}</li>
                          <li>{{arrayLast}}</li>
                      </ul>
                  </div>
                  <div class="pf-slider__input">
                      <input type="text" disabled value="3">
                  </div>
                  <div class="pf-slider__slider">
                      <div id="slider-pips"></div>
                  </div>
              </div>
              </div>
          </div>
      </div>
      `
    })

    const SlideText = Vue.component('SlideTextComponent', {
        name: 'SlideTextComponent',

        data: function () {
            return {
                resultArray: [],
                selfOptionText: ''
            }
        },

        props: {
            sl: Object
        },

        methods: {
            changeResult: function () {

                let array = this.resultArray.slice();

                if (this.selfOptionText) {
                    array.push(this.selfOptionText)
                }

                this.$emit('on_change_result', {
                    value: array
                })

                console.log(array)
            },

            selfOption: function (event) {
                this.selfOptionText = event.target.value
            }
        },

        watch: {
            selfOptionText: function () {
                this.changeResult()
            }
        },

        template: `
      <div>
          <div class="pf-quiz__title">{{sl.question}}</div>
          <div class="pf-quiz__subtitle" v-if="sl.desc">{{sl.desc}}</div>
          <div class="pf-quiz__info">
              <div class="pf-info">
                  <div v-if="sl.multiple " class="pf-info__options">Выберите один или несколько вариантов ответа</div>
                  <div v-if="sl.skip "class="pf-info__skip">Можно пропустить</div>
              </div>
          </div>
          <div class="pf-quiz__content">
              <div class="pf-quiz__answer">
              <div class="pf-answer">
                  
                  <div v-for="OPTION in sl.option" class="pf-answer__item">
                      <label v-if="OPTION.title">
                          <input @change="changeResult()" v-model="resultArray" type="checkbox" name="answer" :value="OPTION.title">
                          <div class="pf-radio"><span class="pf-radio__elem"> </span><span class="pf-radio__text">{{OPTION.title}}</span></div>
                      </label>

                      <label v-else >
                          <input @change="changeResult($event)" type="checkbox" name="answer">
                          <div class="pf-radio"><span class="pf-radio__elem"> </span><span class="pf-radio__text">
                              <input type="text" v-model="selfOptionText" placeholder="Другое"></span></div>
                      </label>
                  </div>
              </div>
              </div>
          </div>
      </div>
      `
    })

    const formComponent = Vue.component('formComponent', {
        name: 'formComponent',

        data: function () {
            return {
                name: null,
                phone: null,
                policy: null,
                errorLog: []
            }
        },

        methods: {
            validate: function () {

                this.errorLog = []

                if (!this.name || !this.phone) {
                    this.errorLog.push('Имя и Телефон обязательны для заполнения');
                }

                if (!this.policy) {
                    this.errorLog.push('Необходимо принять условия политики конфиденциальности');
                }

                if (this.errorLog.length) {
                    return false
                }

                this.$emit('on_submit_form', {
                    name: this.name,
                    phone: this.phone,
                })
            }
        },

        template: `
          <div class="pf-form">
            <div class="pf-form__left">
              <div class="pf-form__logo"><a href="#"><span class="bgimage lazyload" style="background-image: url(../img/common/logo-dark.svg)"></span></a></div>
              <div class="pf-form__title">Заполните форму и наш менеджер свяжется с вами</div>
              <div class="pf-form__subtitle">Оставьте ваш номер телефона чтобы получить консультацию специалиста</div>
              <div class="pf-form__errorlog">
                  <ul>
                      <li v-for="err in errorLog" >- {{err}}</li>
                  </ul>
              </div>
              <div class="pf-form__fields">
                <div class="pf-form__input">
                  <label>Введите имя</label>
                  <input v-model="name" type="text" name="user-name" placeholder="Введите имя">
                </div>
                <div class="pf-form__input">
                  <label>Введите телефон</label>
                  <input v-model="phone" type="tel" name="user-name" placeholder="Введите телефон" v-maska="'#(###)###-##-##'">
                </div>
                <div class="pf-form__input">
                  <button class="btn" @click="validate()" type="submit">Получить консультацию</button>
                </div>
                <div class="pf-form__input">
                  <div class="pf-form__policy">
                    <label class="checkbox-pf">
                      <input v-model="policy" type="checkbox" name="policy">
                      <div class="checkbox-pf__elem"></div>
                      <div class="checkbox-pf__text"><a href="#">С политикой конфиденциальности</a>ознакомлен(а)</div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="pf-form__footer">
                <div class="pf-form__phone"><a href="#"><span class="bgimage lazyload" style="background-image: url(/img/svg/ic_phone.svg)"></span><span>+7 (495) 215-12-25</span></a></div>
                <div class="pf-form__company">Metrium</div>
              </div>
            </div>
            <div class="pf-form__right"><span class="bgimage lazyload" style="background-image: url(../img/common/form-pf.webp) "></span>
            </div>
          </div>
      `
    })

    const app = new Vue({
        el: '#app-quiz',
        component: {
            SlideRange,
            SlideText
        },

        data: {
            SLIDES: false,
            activeSlide: 1,
            disableNavNext: false,
            disableNavPrev: false,
            complete: false
        },

        created: function () {

            fetch('./js/lib/quizObj.json')
                .then(async response => await response.json())
                .then((data) => {
                    this.SLIDES = JSON.parse(JSON.stringify(data))
                    this.activeSlide = 0
                });

        },

        mounted: function () {

            this.$el.classList.add('pf-quiz--loaded')
            this.$el.parentNode.classList.add('quiz--loaded')
        },

        methods: {
            prevSlide: function () {
                if (this.activeSlide > 0) {
                    this.changeSlide((this.activeSlide - 1))
                }
            },

            nextSlide: function () {
                if (this.activeSlide < (this.SLIDES.length - 1)) {
                    this.changeSlide((this.activeSlide + 1))
                } else {
                    this.complete = true;
                }
            },

            changeSlide: function (index) {
                this.$el.querySelector('.pf-quiz__slide').classList.add('fade-slide')
                setTimeout(() => {
                    this.activeSlide = index;
                }, 300)
            },

            changeResult: function () {

                //добавляем массив ответов

                if (typeof this.SLIDES[this.activeSlide]['result'] == 'undefined' && this.SLIDES) {
                    this.disableNavNext = true;
                    this.SLIDES[this.activeSlide]['result'] = [];
                }

                this.getResult()

            },

            getResult: function (event) {
                if (event && this.SLIDES) {
                    this.SLIDES[this.activeSlide]['result'] = event.value

                    if (this.SLIDES[this.activeSlide]['result'].length) {
                        this.disableNavNext = false;

                        // если один вариант то перейти к след вопросу
                        if (!this.SLIDES[this.activeSlide]['multiple'] && this.SLIDES[this.activeSlide]['type'] == 'text' && this.SLIDES[this.activeSlide]['option'].length > 1) {
                            this.nextSlide()
                        }

                    } else {

                        // если можно пропустить, то пропускаем 
                        if (!this.SLIDES[this.activeSlide]['skip']) {
                            this.disableNavNext = true;
                        }
                    }
                }
            },

            submitData: function (event) {
                console.log(event, 'submit')
            }


        },

        computed: {
            stepActive: function () {
                return this.activeSlide + 1
            },

            stepTotal: function () {
                return this.SLIDES.length
            }
        },

        watch: {
            activeSlide: function () {
                console.log(this.activeSlide, 'active watch')

                this.changeResult()

                if (!this.SLIDES[this.activeSlide]['skip']) {
                    this.disableNavNext = true;
                } else {
                    this.disableNavNext = false;
                }

            }
        },

        template: `
          <div class="pf-quiz" >
              <div v-if="!complete" class="pf-quiz__wrp">
                  <div class="pf-quiz__slides">
                  <div v-for="(SLIDE, index) in SLIDES" v-if="index==activeSlide" :key="SLIDE.id" class="pf-quiz__slide">
                      <slide-text-component  v-on:on_change_result="getResult($event)"  v-if="SLIDE.type == 'text'" :sl="SLIDE" ></slide-text-component>
                      <slide-range-component v-on:on_change_result="getResult($event)" v-if="SLIDE.type == 'range'" :sl="SLIDE" ></slide-range-component>
                  </div>
                  </div>
                  <div class="pf-quiz__nav">
                  <div class="pf-quiz__action">
                      <div class="pf-step" >
                          <div class="pf-step__text" >Шаг {{stepActive}} из {{stepTotal}}</div>
                          <div class="pf-step__dots" >
                              <ul><li :class="{active: index <= activeSlide}"  v-for="(dot, index) in this.SLIDES" ></li></ul>
                          </div>
                      </div>
                  </div>
                  <div class="pf-quiz__btn">
                      <button v-bind:disabled="disableNavPrev" class="btn-round" @click="prevSlide()"><span class="ic-arrow-back"></span></button>
                      <button v-bind:disabled="disableNavNext" class="btn btn-blick" @click="nextSlide()">Далее <span class="ic-arrow-next"></span></button>
                  </div>
                  </div>
              </div>
              <form-component v-else v-on:on_submit_form="submitData($event)" ></form-component>
          </div>
      `

    });

})()