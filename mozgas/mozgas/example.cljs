(ns mozgas.example
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [reagent.core :as r]
            [goog.dom :as d]
            [mozgas.core :as m]
            [cljs.core.async :refer [<! timeout]]))


(enable-console-print!)

;; Toggle Box

(def transition-list
  ["fade"
   "flipX"
   "flipY"
   "flipBounceX"
   "flipBounceY"
   "swoop"
   "whirl"
   "shrink"
   "expand"
   "bounce"
   "bounceUp"
   "bounceDown"
   "bounceLeft"
   "bounceRight"
   "slideUp"
   "slideDown"
   "slideLeft"
   "slideRight"
   "slideUpBig"
   "slideDownBig"
   "slideLeftBig"
   "slideRightBig"
   "perspectiveUp"
   "perspectiveDown"
   "perspectiveLeft"
   "perspectiveRight"])

(defn toggle-box []
  (let [visible? (r/atom true)
        transition (r/atom "fade")
        duration (r/atom 1000)]
    (fn []
      [:div.toggle-box-container
       [:label "Transition"]
       [:select.toggle-transition
        {:on-change #(reset! transition
                             (.. % -target -value))}
        (for [t transition-list]
          ^{:key t}[:option {:value t} t])]
       [:label "Duration"]
       [:input.toggle-duration
        {:type "text"
         :value @duration
         :on-change #(reset! duration (.. % -target -value))}]
       [:div.toggle-box {:on-click #(reset! visible? (not @visible?))}
        [m/motion-component
         {:duration @duration
          :animation (if @visible?
                       (str "transition." @transition "In")
                       (str "transition." @transition "Out"))}
         [:div {:style {:width 100
                        :height 100
                        :background-color "indigo"}}]]]])))


;; Square List

(defn square [item]
  [:div {:key item
         :style {:width 100
                 :height 100
                 :margin "0.2rem"
                 :background-color "orange"}}])

(def squares (r/atom []))

(defn render-square-list []
  (fn []
    [:div
     [m/motion-group
      {:enter {:animation "transition.shrinkIn"}
       :leave {:animation "transition.expandOut"}
       :style {:display "flex"
               :flex-wrap "wrap"}}
      (map square @squares)]]))

(defn on-mount-square-list []
  (go-loop []
    (<! (timeout (* 1000 (rand-int 3))))
    (swap! squares conj (rand-int 999))
    (recur)))

(defn square-list []
  (r/create-class
   {:component-did-mount on-mount-square-list
    :reagent-render render-square-list}))

;; Custom transition

(def heart-animation
  {:heart (m/register-effect
           {:defaultDuration 750
            :calls [[{:scale 0} 0.05]
                    [{:scale 0} 0.2]
                    [{:scale 1.2} 0.3 {:easing "ease-out"}]
                    [{:scale 1} 0.4]
                    ]})
   :explosion (m/register-effect
               {:defaultDuration 750
                :calls [[{:scale 0 :opacity 1} 0.1]
                        [{:scale 1} 0.2]
                        [{:opacity 0} 0.4]
                        ]})})


(defn custom-animation []
  (let [fav? (r/atom false)]
    (fn []
      [:div.custom-animation
       [m/motion-component
        {:animation (when @fav? (get heart-animation :explosion))
         :run-on-mount true}
        [:div.custom-animation__circle
         {:style {:position "absolute"}}
         ]]
       [m/motion-component
        {:animation (when @fav? (get heart-animation :heart))
         :run-on-mount true}
        [:div.custom-animation__heart
         {:class-name (if @fav?
                        "custom-animation__heart
                         custom-animation__heart--active"
                        "custom-animation__heart")
          :style {:position "absolute"}
          :on-click #(reset! fav? (not @fav?))}
         ]]])))



(def soccer-teams
  ["Sao Paulo"
   "Santos"
   "Corinthians"
   "Palmeiras"
   "Internacional"
   "Gremio"
   "Avai"
   "Figueirense"
   "Atletico PR"
   "Coritiba"
   "Parana Clube"
   "Botafogo"
   "Flamengo"
   "Fluminense"
   "Vasco"
   "Atletico MG"
   "Cruzeiro"
   "Bahia"
   "Vitoria"
   "Ceara"
   "Santa Cruz"
   "Remo"])

(def team-animation
  {:in (m/register-effect
        {:calls [[{:transformPerspective [800 800]
                   :transformOriginX ["50%" "50%"]
                   :transformOriginY ["100%" "100%"]
                   :marginBottom 0
                   :opacity 1
                   :rotateX [0 130]}
                  1
                  {:easing "ease-out"
                   :display "block"}]]})
   :out (m/register-effect
        {:calls [[{
                   :transformPerspective [800 800]
                   :transformOriginX ["50%" "50%"]
                   :transformOriginY ["0%" "0%"]
                   :marginBottom -30
                   :opacity 0
                   :rotateX -70
                   }
                  1
                  {:easing "ease-out"
                   :display "block"
                   }]]})})


(defn team [team]
  [:li.list__item {:key (:id team) } (:team team)])

(defn add-item [teams item-count]
  (swap! item-count inc)
  (swap! teams #(into [] (cons {:id @item-count :team (rand-nth soccer-teams)} %))))

(defn custom-transition []
  (let [teams (r/atom [])
        item-count (r/atom 0)
        duration 500]
    (fn []
      [:div.custom-transition
       [:button {:on-click #(add-item teams item-count)} "add"]
       [:button {:on-click #(dotimes [n 3] (add-item teams item-count))} "add 3"]
       [m/motion-group
        {:key "motion-gropu"
         :component "ul"
         :class-name "custom-transition__list"
         :enter {:animation (:in team-animation)
                 :stagger duration
                 :duration duration
                 :backwards true
                 :display "block"
                 :style {:display "none"}}
         :leave {:animation (:out team-animation)
                 :stagger duration
                 :duration duration
                 :backwards true
                 }}
        (map team (take 5 @teams))]
       ])))


(defn examples []
  (let [state (r/atom 3)]
    (fn []
      [:div.main
       [:h1.title "Mozgás Examples"]
       [:ul.nav
        [:li.nav__item {:on-click #(reset! state 0)} "Toggle box"]
        [:li.nav__item {:on-click #(reset! state 1)} "Square list"]
        [:li.nav__item {:on-click #(reset! state 2)} "Custom animation"]
        [:li.nav__item {:on-click #(reset! state 3)} "Custom transition"]
        ]
       [:div.content
        (condp = @state
          0 [toggle-box]
          1 [square-list]
          2 [custom-animation]
          3 [custom-transition]
          [:span "Choose an example"])]])))

(defn mount! []
  (println "-> Mozgas loaded")
  (r/render
   [examples]
   (d/getElement "app")))

(mount!)
